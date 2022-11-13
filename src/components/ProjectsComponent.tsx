
import Copa from "/public/copa.png"
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from "next/image";

    const projectList = [
        {
            'name':'App1',
            'githubUrl':'https://github.com/',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            'thumbUrl':{Copa},
        },
        {
            'name':'App2',
            'githubUrl':'https://github.com/',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            'thumbUrl':{Copa}
        },
        {
            'name':'NLW-Copa',
            'githubUrl':'https://github.com/',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            'thumbUrl':{Copa}
        },
        {
            'name':'NLW-eSports',
            'githubUrl':'https://github.com/',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            'thumbUrl': {Copa}
        },
    ]


    export default function ProjectsComponent() {
        return (
            <Carousel
                className="w-2/3"    
            >
                {
                    projectList.map(project => (
                        <div key={project.name} className="p-5 flex-col  text-center bg-slate-800">

                            <Image
                                className="object-none object-center"
                                src={Copa}
                                alt=""
                                width={50}
                                height={50}
                            />
                            {project.name}
                            <div>
                                {project.description}
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        )
    }