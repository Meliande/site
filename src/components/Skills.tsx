export default function Skills() {

    const hardSkillList = ['HTML','CSS','JavaScript','Node','NextJS','React','SASS','GIT','Github','Linux','Terminal','SQL','NoSQL','TailwindCSS','Prisma','REST','ReactNative']

    return(
        <div>
            <h1 className="font-bold text-2xl pb-6 text-center text-[#6B2737]">Minhas habilidades</h1>
            <div className="grid grid-cols-2 gap-3 pb-10 lg:grid-cols-3">
            {
                hardSkillList.map(skill => (
                    <strong className="bg-[#6B2737] rounded-xl text-md text-center">{skill}</strong>
                ))
            }
            </div>
        </div>
    )
}