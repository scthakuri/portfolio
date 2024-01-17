import React from 'react'
import { skills } from '../constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Skills = () => {
    return (
        <section id="skills" className="bg-gray-900 py-8 md:py-14">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl text-white">Skills</h2>
                    <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">Here are some of my skills on which I have been working on for the past 2 years.</p>
                </div>


                <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto gap-[30px] mt-16 px-0 md:px-5">
                    {
                        skills.map((skill) => (
                            <div className="skill_container border-blue-700 border-[1px] flex gap-4 items-start flex-col " key={skill.title}>
                                <div>
                                    <h3 className="text-white font-semibold text-xl">{skill.title}</h3>

                                    <div className="flex items-start gap-3 flex-wrap mt-4">
                                        {
                                            skill.skills.map((skill_item) => (
                                                <div className="skill_item border-blue-700 border-[1px]" key={skill_item.name}>
                                                    <LazyLoadImage 
                                                        src={skill_item.image} 
                                                        alt={skill_item.name} 
                                                    />
                                                    {skill_item.name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills;