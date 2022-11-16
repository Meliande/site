import React from "react"
import Link from 'next/link';
import Image from 'next/image'


export default function Header() {

    return (
        <div className="bg-zinc-500 font-bold flex justify-between py-2 px-10 h-10 md:h-auto">

            <Link
                className="flex overflow-hidden hover:text-amber-200 focus:text-amber-200 transition duration-500 invisible md:visible"
                href='/'
            >
                <Image
                    className="rounded-full"
                    src='https://github.com/meliande.png'
                    alt=""
                    width={50}
                    height={50}
                />        
                <span className="pt-1.5 pl-5 text-2xl">Rodrigo Meliande</span> 
            </Link>

            <div className="flex">
                <Link 
                    className="px-5 text-2xl hover:text-amber-200 focus:text-amber-200 transition duration-500" href='/'>Home
                </Link>
                <Link 
                    className="px-5 text-2xl hover:text-amber-200 focus:text-amber-200 transition duration-500" href='/about'>Sobre
                </Link>
                <Link 
                    className="px-5 text-2xl hover:text-amber-200 focus:text-amber-200 transition duration-500" href='/projects'>Projetos
                </Link>
            </div>
        </div>
    )
}