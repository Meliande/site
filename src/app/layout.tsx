import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rodrigo Meliande',
  description: 'Rodrigo Meliande Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black w-full`}>
        <Script id='Theme' strategy='beforeInteractive'>
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
