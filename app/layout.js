import { draftMode } from 'next/headers'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

export const metadata = {
  title: 'James de Jesus',
  openGraph: {
    title: 'James de Jesus',
  },
}

export default async function RootLayout({ children }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {isEnabled && (
          <div style={{ background: '#f0b429', padding: '8px 16px', textAlign: 'center', fontSize: '14px' }}>
            Draft mode — previewing unpublished content.{' '}
            <a href="/api/disable-draft" style={{ fontWeight: 'bold' }}>Exit preview</a>
          </div>
        )}
        {children}
      </body>
    </html>
  )
}
