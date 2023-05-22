'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

export function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="
                    w-16 h-16 bg-black text-white 
                    flex items-center justify-center rounded-full
                    text-2xl font-bold border border-solid border-transparent dark:border-white
                "
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(3, 201, 169,1)',
            'rgba(150,54,148,1)',
            'rgba(252,176,69,1)',
            'rgba(65,147,169,1)',
            'rgba(130,94,92,1)',
            'rgba(217,30,24,1)',
            'rgba(166,145,92,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        RM
      </MotionLink>
    </div>
  )
}
