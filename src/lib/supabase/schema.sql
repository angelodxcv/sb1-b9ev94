-- Enable Row Level Security
alter table profiles enable row level security;

-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique not null,
  avatar_url text,
  current_price numeric not null default 100,
  owner_id uuid references auth.users on delete set null,
  level integer not null default 1,
  experience integer not null default 0,
  last_sale_price numeric,
  total_transactions integer not null default 0,
  cooldown_ends_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create RLS policies
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create function to handle user creation
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

-- Create trigger for new user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();