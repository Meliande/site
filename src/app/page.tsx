import Image from 'next/image'
import anime from '../../public/img/profile/anime.png'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'
import { ExternalLink } from '@/components/Icons'
import Layout from '@/components/Layout'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

const Home = () => {
  return (
    <>
      <TransitionEffect />
      <main className="text-black w-full dark:text-white 2xl:">
        <Layout className="md:pt-16 sm:pt-8">
          <div className="flex items-center w-full lg:flex-col">
            <div className="w-1/2">
              <Image
                src={anime}
                alt="Anime version of the author, Rodrigo Meliande"
                className="rounded-xl lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hello, i'm Rodrigo, your Next(js) fullstack developer."
                className="!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Information systems balchelor and web developer that loves the
                whole Javascript enviroment. Feel free to explore my portifolio
                and contact me if i could be of any help.
              </p>
              <div className="flex items-center self-start mt-2 gap-2 lg:self-center">
                <Link
                  href="/img/resume.pdf"
                  target="_blank"
                  className="
                    flex items-center bg-black text-white
                    p-2.5 px-6 rounded-lg text-lg font-semibold
                    border-2 border-solid border-transparent
                    hover:bg-white hover:text-black hover:border-black transition duration-500 
                    dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white
                    hover:dark:border-white md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <ExternalLink className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:rodrigomeliande@msn.com"
                  className="text-lg font-medium capitalize text-black underline dark:text-white
                  md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}

export default Home
