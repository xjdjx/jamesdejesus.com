import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

export const metadata = {
  title: 'James de Jesus',
  openGraph: {
    title: 'James de Jesus',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
