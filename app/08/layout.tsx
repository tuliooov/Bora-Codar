import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bora Codar - Score - 08',
  description: 'Bora Codar - Score - 08',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
        <script src="https://unpkg.com/phosphor-icons"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
