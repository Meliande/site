"use client"

import Link from "next/link";
import { Logo } from "./Logo";
import { TwitterIcon, LinkedinIcon, Sun, Moon, GitHub } from "./Icons";
import { motion } from "framer-motion"
import { usePathname, useRouter } from 'next/navigation';
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

interface CustomMobileLinkProps {
    href: string;
    title: string;
    className?: string;
    toggle: () => void;
}

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({href="", title="", className=""}) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span 
                className={`
                    h-1 w-0 inline-block bg-black absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${pathname === href ? 'w-full' : 'w-0'}
                    dark:bg-white
                    `
                }
            >
              &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({href="", title="", className="", toggle}) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    }
    return (
        <button className={`${className} relative group text-white dark:text-black my-2`} onClick={handleClick}>
            {title}
            <span 
                className={`
                    h-1 w-0 inline-block bg-white
                    absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${pathname === href ? 'w-full' : 'w-0'}
                    dark:bg-black
                    `
                }
            >
              &nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return ( 
        <header className="
            w-full px-32 py-8 font-medium flex items-center justify-between relative
          dark:text-white z-10 lg:px-16 md:px-12 sm:px-8">

            <button className="flex-col justify-center items-center hidden lg:flex gap-1" onClick={handleClick}>
                <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
            <nav className="flex gap-6">
                <CustomLink href="/" title="Home"/>
                <CustomLink href="/about" title="About"/>
                <CustomLink href="/projects" title="Projects"/>
            </nav>

            <nav className="flex items-center justify-center flex-wrap text-4xl gap-6">
                <motion.a
                    href='https://twitter.com/Melimotion.andeRodrigo'
                    target="blank"
                    whileHover={{ y:-2 }}
                    whileTap={{ scale:0.9}}
                >
                    <TwitterIcon/>
                </motion.a>
                <motion.a
                    href='https://github.com/Meliande'
                    target="blank"
                    whileHover={{ y:-2 }}
                    whileTap={{ scale:0.9}}
                >
                    <GitHub/>
                </motion.a>
                <motion.a
                    href='https://www.linkedin.com/in/rodrigomeliande/'
                    target="blank"
                    whileHover={{ y:-2 }}
                    whileTap={{ scale:0.9}}
                >
                    <LinkedinIcon/>
                </motion.a>

                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`flex items-center justify-center rounded-full p-1

                    `}
                >
                    {
                        mode === "dark" ? <Sun className={"fill-black"}/> : <Moon className={"fill-white"}/>
                    }
                </button>

            </nav>
            </div>

            {
                isOpen ? 
                    <motion.div
                        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                        animate={{scale:1, opacity:1}}
                        className="
                        min-w-[70vw] flex flex-col justify-center
                        items-center fixed top-1/2 left-1/2
                        bg-black/50 dark:bg-white/50 rounded-lg backdrop-blur-md py-32
                        "
                >
                <nav className="flex items-center flex-col justify-center gap-3">
                    <CustomMobileLink href="/" title="Home" toggle={handleClick}/>
                    <CustomMobileLink href="/about" title="About"toggle={handleClick}/>
                    <CustomMobileLink href="/projects" title="Projects"toggle={handleClick}/>
                </nav>

                <nav className="flex items-center justify-center flex-wrap text-4xl gap-6 md:gap-2 pt-6">
                    <motion.a
                        href='https://twitter.com/Melimotion.andeRodrigo'
                        target="blank"
                        whileHover={{ y:-2 }}
                        whileTap={{ scale:0.9}}
                    >
                        <TwitterIcon/>
                    </motion.a>
                    <motion.a
                        href='https://github.com/Meliande'
                        target="blank"
                        whileHover={{ y:-2 }}
                        whileTap={{ scale:0.9}}
                    >
                        <GitHub/>
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/in/rodrigomeliande/'
                        target="blank"
                        whileHover={{ y:-2 }}
                        whileTap={{ scale:0.9}}
                    >
                        <LinkedinIcon/>
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`flex items-center justify-center rounded-full p-1

                        `}
                    >
                        {
                            mode === "dark" ? <Sun className={"fill-black"}/> : <Moon className={"fill-white"}/>
                        }
                    </button>

                </nav>
                    </motion.div> 
                : 
                    null
            }

			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo/>
            </div>
        </header>
        )
    }
 
export default NavBar;