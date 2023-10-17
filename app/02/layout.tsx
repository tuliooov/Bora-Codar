import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bora Codar - Product Card - 02',
  description: 'Bora Codar - Product Card - 02',
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
