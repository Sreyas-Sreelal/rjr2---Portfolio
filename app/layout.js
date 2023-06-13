import './globals.css'
import "../styles/fonts.css";

export const metadata = {
  title: 'RjR',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body >{children}</body>
    </html>
  )
}
