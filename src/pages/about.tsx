import AboutComponent from "../components/AboutComponent";
import Skills from "../components/Skills";

export default function About() {
    return(
        <div className="px-28 pt-16 grid grid-cols-1 gap-36 text-center lg:grid-cols-2">
            <div
                className=""
            >
                <AboutComponent/>
            </div>
            <div 
                className=""
            >
                <Skills/>
            </div>
        </div>
    )
}