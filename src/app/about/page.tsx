"use client";

import { AnimatedText } from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import profilePic from "public/img/profile/eu.png"
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineArrowDown } from 'react-icons/ai'
import TransitionEffect from "@/components/TransitionEffect";


const About = () => {
    return ( 
        <>
            <Head>
                <title>Rodrigo Meliande | About</title>
                <meta name="description" content="Informations about the author, Rodrigo Meliande" />
            </Head>
            <TransitionEffect/>
            <main className="flex w-full flex-col items-center justify-center dark:text-white">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Passion fuels pourpose!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-8 md:order-2">
                            <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white/75">About me</h2>
                            <p className="font-medium">
                                Hello, i&apos;m Rodrigo, a information systems balchelor and
                                fullstack web developer from Brazil that loves the whole Javascript
                                environment. On the web side of the development i&apos;ve mostly worked
                                with React allied with some of the best build tools available, like&nbsp;
                                <a className="underline" href="https://vitejs.dev/guide/">Vite</a> or&nbsp;
                                <a className="underline" href="https://nextjs.org/">NextJS</a> to guarantee
                                that the whole application runs smooth from scratch.
                            </p>
                            <p className="py-4 font-medium">
                                Regarding the backend and mobiles development my preferred tools are <a className="underline" href="https://nodejs.org/en">NodeJS</a> allied with
                                a nice ORM tool, like <a className="underline" href="https://www.prisma.io/">Prisma</a> and <a className="underline" href="https://www.mongodb.com/atlas/database">MongoDB</a>&nbsp;
                                as my database engine that allow a nice and easy serverless aproach to the applications i develop
                                and <a className="underline" href="https://reactnative.dev/">ReactNative</a> that allows me to develop mobile applications to both major operational systems availble
                                on the market.
                            </p>
                            <p className="font-medium">
                                On the academic side, i&apos;m also a masters student at Universidade Federal da Bahia, Brazil, where my
                                research ir centered around the use of Metaverse interfaces as means to facilitate long distance
                                teaching and learning. I&apos;m also interested in politics and economics those being where i spend most
                                of my free time reading.
                            </p>
                        </div>
                        <div className="
                            col-span-3 relative h-max rounded-2xl border-2 items-center
                            border-solid border-black bg-white p-8 dark:bg-black dark:border-white xl:col-span-8 md:order-1">
                            <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-white"/>
                            <Image
                                src={profilePic}
                                alt="Rodrigo Meliande"
                                className="w-max h-auto rounded-2xl"
                            />
                        </div>
                        <div className="pt-56 col-span-2 flex flex-col items-center gap-24 text-center xl:hidden">
                            <TypeAnimation
                                sequence={[
                                    "MY SKILLS", 1000,
/*                                  "MY EXPERIENCE", 1000,
                                    "MY RESEARCH", 1000,
                                    "MY WORK", 1000,
                                    "HOW I CAN HELP", 1000, */
                                ]}
                                wrapper="span"
                                cursor={true}
                                style={{ fontSize: '2rem', fontWeight:"bold" ,display: 'inline-block' }}
                            />
                            <div className="animate-bounce">
                                <AiOutlineArrowDown size={60}/>
                            </div>
                        </div>
                    </div>
                    <Skills/>
                </Layout>
            </main>
        </>
     );
}
 
export default About;