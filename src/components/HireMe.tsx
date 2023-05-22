import Link from 'next/link'
import CircularText from './Icons'

const HireMe = () => {
  return (
    <div className="fixed right-32 bottom-24 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={'fill-black animate-slow-spin dark:fill-white'}
        />
        <Link
          href="mailto:rodrigomeliande@msn.com"
          className="
            w-20 h-20 flex items-center justify-center 
            absolute left-1/2 top-1/2 -translate-x-1/2 
            -translate-y-1/2 bg-black text-white shadow-md
            border border-solid border-black rounded-full font-semibold
            hover:bg-white hover:text-black transition
            dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white hover:dark:border-white
            md:w-12 md:h-12 md:text-[10px]
            "
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
