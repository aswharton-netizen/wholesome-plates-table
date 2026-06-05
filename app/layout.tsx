import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
export const metadata: Metadata = {
  title: 'Wholesome Plates Table | Private Chef Sessions in Metro Atlanta',
  description: 'A chef comes to your home, cooks for your week, and leaves your kitchen spotless.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
