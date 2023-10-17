import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bora Codar - Botões e Cursores - 03',
  description: 'Bora Codar - Botões e Cursores - 03',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
