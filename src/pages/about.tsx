import { useState } from "react";
import AboutComponent from "../components/AboutComponent";
import FrontEndChart from "../components/FrontEndChart";
import BackEndChart from "../components/BackEndChart";
import SoftSkillsChart from "../components/SoftSkillsChart";

export default function About() {

    const [selectedChart, setSelectedChart] = useState("FrontEnd");

    const clickHandler = (value : string) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            setSelectedChart(value)
        }
      }

    return(
        <div className="px-28 py-8 grid grid-cols-1 gap-5 text-center xl:grid-cols-2">
            <div className="flex-col">
                <p className="pb-5">
                    Estudante de <a href="http://www.bsi.ufba.br/" target='_blank' rel="noreferrer">sistemas de informação</a>  Sou um desenvolvedor full stack, apaixonado de todo o ecossistema <strong>JavaScript</strong> 
                </p>
                <AboutComponent/>
            </div>
            <div className="">
                <div className="font-bold grid grid-cols-3 gap-5">
                    <button className="bg-slate-500 rounded-xl hover:scale-105 hover:text-white focus:scale-110 focus:text-white" onClick={clickHandler("FrontEnd")}>Front</button>
                    <button className="bg-emerald-500 rounded-xl hover:scale-105 hover:text-white focus:scale-110 focus:text-white" onClick={clickHandler("BackEnd")}>Back</button>
                    <button className="bg-pink-500 rounded-xl hover:scale-105 hover:text-white focus:scale-110 focus:text-white" onClick={clickHandler("SoftSkills")}>Misc</button>
                </div>
                <div className="">
                    {
                        selectedChart === "FrontEnd" ? <FrontEndChart/> : selectedChart === "BackEnd" ? <BackEndChart/> : <SoftSkillsChart/>
                    }
                </div>
            </div>
        </div>
    )
}