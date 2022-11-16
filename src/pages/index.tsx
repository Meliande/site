import Link from "next/link";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return(
    <div className='h-screen text-center'>
        <Sidebar/>
        <div className="flex-col p-20">
                <h1 className="text-5xl font-bold">Olá, eu sou Rodrigo Meliande</h1>
                <p className="pt-9 text-2xl">
                    Um desenvolvedor web e mobile que busca ajudar no sucesso da sua companhia através das aplicações que desenvolve
                </p>
                <div className="pt-20">
                    <Link
                        href="/projects"
                    >
                        <button className="bg-zinc-500 rounded-lg p-5">PROJETOS</button>
                    </Link>
                </div>
        </div>
    </div>
)
}