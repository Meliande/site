import { AnimatedText } from "@/components/AnimatedText";
import { GitHub } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectProps {
    type: string,
    title: string,
    summary: string,
    img: string,
    link: string,
    github: string,
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ( {
    type, title, summary, img, link, github
} ) => {
    return (
        <article 
            className="w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
            border border-solid border-black bg-white shadow-2xl p-12 dark:bg-black dark:border-white
            lg:!flex-col lg:!p-8 xs:!rounded-2xl xs:!rounded-br-3xl xs:!p-4
            ">
            <div 
                className="
                    absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
                    bg-black rounded-br-3xl dark:bg-white xs:!-right-2 sm:!h-[102%] xs:!w-full xs:!rounded-[1.5rem]"
                />
            <Link href={link} target="blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:!w-full">
                <Image src={img} alt={title} width={1000} height={1000} className="w-full h-auto"/>
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:!w-full lg:!pl-0 lg:!pt-6">
                <span className="text-pink-700 font-medium text-xl dark:text-emerald-600 xs:!text-base">{type}</span>
                <Link href={link} target="blank" className="hover:underline underline-offset-2">
                <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-white sm:!text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-black dark:text-white sm:!text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="blank" className="w-10 dark:text-white">
                        {" "}
                        <GitHub/>
                    </Link>
                    <Link 
                        href={link}
                        target="blank"
                        className="
                            ml-4 rounded-lg bg-black text-white
                            p-2 px-6 text-lg font-semibold dark:bg-white dark:text-black
                            sm:!px-4 sm:!text-base
                            "
                        >Visit project
                    </Link>
                </div>
            </div>
        </article>
    )
}

interface ProjectProps {
    type: string,
    title: string,
    img: string,
    link: string,
    github: string,
}

const Project: React.FC<ProjectProps> = ( {
    type, title, img, link, github
} ) => {
    return (
        <article 
            className="
                w-full flex flex-col items-center justify-center rounded-2xl
                border border-solid border-black bg-white p-6 relative
                dark:bg-black dark:border-white xs:!p-4
                "
            >
            <div 
                className="
                    absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
                    bg-black rounded-br-3xl dark:bg-white md:!-right-2 md:!w-[101%] sm:!h-[102%]
                    xs:!rounded-[1.5rem]                    
                    "
                />
            <Link href={link} target="blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} width={1000} height={1000} className="w-full h-auto"/>
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-pink-700 font-medium text-xl dark:text-emerald-600 lg:!text-lg md:!text-base">{type}</span>
                <Link href={link} target="blank" className="hover:underline underline-offset-2">
                <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-white lg:!text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between dark:text-white">
                    <Link 
                        href={link}
                        target="blank"
                        className="
                            text-lg font-semibold underline md:!text-base"
                        >Visit
                    </Link>
                    <Link href={github} target="blank" className="w-8 md:!w-6"><GitHub/></Link> 
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return ( 
        <div className="w-full mb-16 flex flex-col items-center justify-center">
            <TransitionEffect/>
            <Layout className="pt-16">
                <AnimatedText text="Find Out More About My Work" className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"/>
                <div className="grid grid-cols-12 gap-24 gap-y-32 xl:!gap-x-16 lg:!gap-x-8 md:!gap-y-24 sm:!gap-x-0">
                    <div className="col-span-12">
                        <FeaturedProject
                            title="Bolsis"
                            summary="Web application developed for the Federal University of Bahia along with colleagues, the purpose of this
                            application is to manage scholarship for the postgraduate students.
                            "
                            img="https://raw.githubusercontent.com/Meliande/site/main/public/img/projects/bolsis.png"
                            github="https://github.com/orgs/mate85-equipe03/repositories"
                            link="https://github.com/orgs/mate85-equipe03/repositories"
                            type="Featured Project"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project 
                            title="NLW-Cup"
                            img="https://raw.githubusercontent.com/Meliande/site/main/public/img/projects/nlw-copa.png"
                            github="https://github.com/Meliande/nlw-copa"
                            link="https://github.com/Meliande/nlw-copa"
                            type="Project"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project 
                            title="NLW-Esport"
                            img="https://raw.githubusercontent.com/Meliande/site/main/public/img/projects/nlw-esports.png"
                            github="https://github.com/Meliande/nlw-esports"
                            link="https://github.com/Meliande/nlw-esports"
                            type="Project"
                        />
                    </div>
                </div>
            </Layout>
        </div>
     );
}
 
export default Projects;