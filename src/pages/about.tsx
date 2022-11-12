import Link from "next/link";
import AboutComponent from "../components/AboutComponent";
import Skills from "../components/Skills";

export default function About() {
    return(
        <div className="">
            <div className="flex-col py-5 text-center text-[#6B2737]">
                <strong className="text-5xl pb-5]">
                    SOBRE
                </strong>
            </div>
            <div className="px-28 grid grid-cols-1 gap-36 overflow-hidden text-center lg:grid-cols-2">
                <div
                    className=""
                >
                    <AboutComponent/>
                </div>
                <div 
                    className="overflow-hidden"
                >
                    <Skills/>
                </div>
            </div>
        </div>
    )
}