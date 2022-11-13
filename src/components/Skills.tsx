export default function Skills() {

    const SkillList = ['CSS','GIT','Github','HTML','JavaScript','Linux','NextJS','NoSQL','Node','Prisma','REST','React','ReactNative','SASS','SQL','TailwindCSS','Terminal']

    return(
        <div className="font-bold">
            <h1 className="">Minhas habilidades</h1>
            <div className="pt-8 grid grid-cols-2 gap-3 pb-10 lg:grid-cols-3">
            {
                SkillList.map(skill => (
                    <div key={skill} className="p-1 rounded-2xl bg-[#662E9B]">
                        {skill}
                    </div>
                ))
            }
            </div>
        </div>
    )
}