import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextJS Forms',
  description: 'The best way to handle forms in NextJS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
