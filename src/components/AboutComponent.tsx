import Link from "next/link";

export default function AboutComponent() {
    return(
        <div className="">
            <div className="text-[#6B2737]">
                <h1 className="font-bold text-2xl pb-6 text-center">Me conheça</h1>
                <p className="text-left text-md">
                    Sou um <span className="font-bold">desenvolvedor web</span> 
                </p>
            </div>
                    
            <button className="p-5 font-bold bg-[#6B2737] rounded-2xl hover:scale-110 transition duration-300">PROJETOS</button>
         </div>
    )
}