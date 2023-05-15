import { AnimatedText } from "@/components/AnimatedText";
import { GitHub } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import Link from "next/link";
import Bolsis from "public/img/projects/bolsis.png"

interface FeaturedProjectProps {
    type: string,
    title: string,
    summary: string,
    img: typeof Image,
    link: string,
    github: string,
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ( {
    type, title, summary, img, link, github
} ) => {
    return (
        <div>
            <Link href={link} target="blank">
                {/* <Image src={img} alt={title} className="w-full h-auto"/> */}
                <div>
                    <span>{type}</span>
                    <Link href={link} target="blank">
                    <h2>{title}</h2>
                    </Link>
                    <p>{summary}</p>
                    <div>
                        <Link href={github} target="blank"><GitHub/></Link>
                        <Link href={link} target="blank">Visit the project</Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const Projects = () => {
    return ( 
        <div className="w-full mb-16 flex flex-col items-center justify-center">
            <TransitionEffect/>
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge"/>
                <div className="grid grid-cols-12 gap-24">
                    <div className="col-span-12">
                        {/* <FeaturedProject
                            title=""
                            summary=""
                            img={Bolsis}
                            github=""
                            link=""
                            type=""
                        /> */}
                    </div>
                    <div className="col-span-6">
                        Featured Project
                    </div>
                    <div className="col-span-6">
                        Featured Project
                    </div>
                    <div className="col-span-12">
                        Featured Project
                    </div>
                    <div className="col-span-6">
                        Featured Project
                    </div>
                    <div className="col-span-6">
                        Featured Project
                    </div>
                </div>
            </Layout>
        </div>
     );
}
 
export default Projects;