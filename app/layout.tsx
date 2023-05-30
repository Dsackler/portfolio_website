import './globals.css'
import { Navbar } from '@/components/Navbar'



export const metadata = {
  title: 'David Sackler',
  description: 'My Portfolio (A portion of it at least)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
