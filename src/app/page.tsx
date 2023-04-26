import { Layout } from '@/components/Layout'
import { NavBar } from '@/components/NavBar'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import anime from '../../public/img/profile/anime.png'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'
import { ExternalLink } from '@/components/Icons'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="text-black w-full min-h-screen">
        <NavBar/>
        <Layout className=''>
          <div className='flex items-center w-full'>
            <div className='w-1/2'>
              <Image src={anime} alt='Anime version of the author, Rodrigo Meliande' className='rounded-xl'/>
            </div>
            <div className='w-1/2'>
              <AnimatedText text='Developing web applications to help you achieve your goals' className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                Information systems balchelor and web developer that loves the whole Javascript enviroment. Feel free to explore
                my portifolio and contact me if i could be of any help.
              </p>
              <div className='flex items-center self-start mt-2 gap-2'>
                <Link 
                  href="/dummy.pdf"
                  target='blank'
                  className='
                    flex items-center bg-black text-white
                    p-2.5 px-6 rounded-lg text-lg font-semibold
                    hover:bg-white hover:text-black
                    border-2 border-solid border-transparent hover:border-black
                  '
                  download={true}
                >
                  Resume <ExternalLink className={"w-6 ml-1"}/>
                </Link>
                <Link 
                  href="mailto:rodrigomeliande@msn.com"
                  className='text-lg font-medium capitalize text-black underline'
                >
                  Contact
                  </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Footer/>
      </main>
  )
}
