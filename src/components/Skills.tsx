import { motion } from 'framer-motion'
import React from 'react'

interface SkillProps {
  name: string
  positionX: string
  positionY: string
}

const Skill: React.FC<SkillProps> = ({ name, positionX, positionY }) => {
  return (
    <motion.div
      className="
        flex items-center justify-center rounded-full font-semibold
        bg-black text-white p-2 shadow-black cursor-pointer
        absolute dark:text-black dark:bg-white hover:animate-pulse
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-black xs:dark:text-white xs:font-bold
        "
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: positionX,
        y: positionY,
        transition: { duration: 1.5 },
      }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="
        w-full h-screen relative flex items-center justify-center rounded-full
        bg-circularLight dark:bg-circularDark lg:h-[80vw] sm:h-[60vw] xs:h-[50vw]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        "
      >
        <motion.div
          className="
          flex items-center justify-center rounded-full font-semibold
          bg-black text-white p-8 shadow-black cursor-pointer dark:text-black dark:bg-white
          lg:p-6 md:p-4 xs:text-xs xs:p-2
          "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" positionX="-5vw" positionY="-11vw" />
        <Skill name="HTML" positionX="-20vw" positionY="2vw" />
        <Skill name="ReactNative" positionX="20vw" positionY="6vw" />
        <Skill name="ReactJS" positionX="0vw" positionY="12vw" />
        <Skill name="TailwindCSS" positionX="-17vw" positionY="-15vw" />
        <Skill name="NextJS" positionX="15vw" positionY="-12vw" />
        <Skill name="Figma" positionX="0vw" positionY="-20vw" />
        <Skill name="JavaScript" positionX="35vw" positionY="-5vw" />
        <Skill name="MongoDB" positionX="5vw" positionY="-11vw" />
        <Skill name="Pusher" positionX="-20vw" positionY="13vw" />
        <Skill name="SQL" positionX="14vw" positionY="3vw" />
      </div>
    </>
  )
}

export default Skills
