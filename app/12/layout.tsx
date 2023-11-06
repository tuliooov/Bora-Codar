import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bora Codar - Conversor de Moedas - 09',
  description: 'Bora Codar - Conversor de Moedas - 09',
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
        />
      </head>
      <body>{children}</body>
      <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
      <script src="./script.js"></script>
    </html>
  )
}
