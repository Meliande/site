import Link from "next/link";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return(
    <div className='h-screen'>
        <Sidebar/>
        <div className="p-20 grid grid-cols-1 place-items-center text-center">
                <h1 className="text-5xl font-bold">Olá, eu sou Rodrigo Meliande</h1>
                <p className="pt-9 text-xl break-words px-96">
                    Um desenvolvedor web e mobile que busca ajudar no sucesso da sua companhia através das aplicações que desenvolve
                </p>
                <Link className="pt-10" href="/projects">
                    <button className="p-5 font-bold bg-zinc-500 rounded-2xl hover:scale-110 hover:text-amber-200 transition duration-300">PROJETOS</button>
                </Link>
        </div>
    </div>
)
}