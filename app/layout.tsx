import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lễ Tốt Nghiệp - Thiệp Mời',
  description: 'Thiệp mời dự lễ tốt nghiệp đặc biệt',
  generator: 'v0.dev',
  charset: 'utf-8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/invitation.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
