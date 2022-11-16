import 'styles/global.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className=''>
      <Header/>
      <Component {...pageProps} />
      <div className='relative bottom-0'>
        <Footer/>
      </div>

  </div>
  )
}