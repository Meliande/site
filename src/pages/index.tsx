import Sidebar from "../components/Sidebar";


export default function Home() {
  return(
    <div className=''>
        <Sidebar/>
        <div className="grid place-items-center text-[#3A3238] xl:pt-40">
                <h1 className="text-5xl font-bold">Olá, eu sou Rodrigo Meliande</h1>
                <p className="pt-9 text-center text-xl break-words px-96">
                    Um desenvolvedor web e mobile que busca ajudar no sucesso da sua companhia através das aplicações que desenvolve
                </p>
                <a className="pt-10" href="/projects">
                    <button className="p-5 font-bol bg-[#E8B4BC] text-[#3A3238] rounded-2xl hover:scale-110 transition duration-300">PROJETOS</button>
                </a>
        </div>
    </div>
)
}