import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get('af_auth')?.value

  if (token !== process.env.PORTFOLIO_SECRET) {
    redirect('/login')
  }

  return <>{children}</>
}
