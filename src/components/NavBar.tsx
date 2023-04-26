"use client"

import Link from "next/link";
import { Logo } from "./Logo";
import {TwitterIcon, LinkedinIcon, Sun, Moon, GitHub} from "./Icons";
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation';

const CustomLink = ({href="", title="", className=""}) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span 
                className={`
                    h-1 w-0 inline-block bg-black absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${pathname === href ? 'w-full' : 'w-0'}
                `
                }
            >
                &nbsp;
            </span>
        </Link>
    )
}

export function NavBar() {
    return( 
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav className="flex gap-6">
            <CustomLink href="/" title="Home"/>
            <CustomLink href="/about" title="About"/>
            <CustomLink href="/projects" title="Projects"/>
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo/>
        </div>
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
        </nav>
    </header>
    )
}