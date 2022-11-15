export default function AboutComponent() {

    const Skills = ['CSS','GIT','Github','HTML','JavaScript','Linux','NextJS','NoSQL','Node','Prisma','REST','React','ReactNative','SASS','SQL','TailwindCSS','Terminal']
    const backSkills = ['NextJS','NoSQL','Node','Prisma','SQL']
    const fronSkills = ['CSS','HTML','JavaScript','React','ReactNative','SASS','TailwindCSS']
    const softSkills = ['GIT','Github','Linux','REST','Terminal']

    return(
        <div className="font-bold">
            <div className="grid grid-cols-5 gap-2">
                {
                    fronSkills.map(skill => (
                        <div key={skill} className="bg-[#B4CEB3] rounded-lg">
                            {skill}
                        </div>
                    ))
                }
                {
                    backSkills.map(skill => (
                        <div key={skill} className="bg-[#88A0A8] rounded-lg">
                            {skill}
                        </div>
                    ))
                }
                {
                    softSkills.map(skill => (
                        <div key={skill} className="bg-[#FAD4D8] rounded-lg">
                            {skill}
                        </div>
                    ))
                }
            </div>
         </div>
    )
}