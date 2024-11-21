import { toast } from 'react-hot-toast'

interface ToastOptions {
  title: string
  description: string
  variant?: 'default' | 'destructive'
}

export function useToast() {
  const showToast = ({ title, description, variant = 'default' }: ToastOptions) => {
    toast[variant === 'destructive' ? 'error' : 'success'](
      <div className="flex flex-col gap-1">
        <span className="font-semibold">{title}</span>
        <span className="text-sm">{description}</span>
      </div>
    )
  }

  return { toast: showToast }
}