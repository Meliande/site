export default function AboutComponent() {

    const Skills = ['CSS','GIT','Github','HTML','JavaScript','Linux','NextJS','NoSQL','Node','Prisma','REST','React','ReactNative','SASS','SQL','TailwindCSS','Terminal']
    const backSkills = ['NextJS','NoSQL','Node','Prisma','SQL']
    const fronSkills = ['CSS','HTML','JavaScript','React','ReactNative','SASS','TailwindCSS']
    const softSkills = ['GIT','Github','Linux','REST','Terminal']

    return(
        <div className="font-bold">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    fronSkills.map(skill => (
                        <div key={skill} className="bg-slate-500 rounded-lg">
                            {skill}
                        </div>
                    ))
                }
                {
                    backSkills.map(skill => (
                        <div key={skill} className="bg-emerald-500 rounded-lg">
                            {skill}
                        </div>
                    ))
                }
                {
                    softSkills.map(skill => (
                        <div key={skill} className="bg-pink-500 rounded-lg">
                            {skill}
                        </div>
                    ))
                }
            </div>
         </div>
    )
}