import 'styles/global.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className='bg-[#DBD3C9] h-screen scroll-smooth'>
    <div className=''>
      <Header/>
    </div>
    <div>
      <Component {...pageProps} />
    </div>
    <div className='absolute bottom-0 invisible lg:visible'>
      <Footer/>
    </div>
  </div>
  )
}