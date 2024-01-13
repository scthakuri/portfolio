"use client";

import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../constants'
import { ProjectType } from '../constants/types'
import Modal from 'react-modal'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor : "transparent",
        padding:0,
        border:0
    },
    overlay : {
        backgroundColor : "rgba(0, 0, 0, 0.5)"
    }
};

export default function Projects() {
    const [project, setProject] = useState<ProjectType | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        setModalIsOpen(project != null);
    }, [project])

    return (
        <section id="projects" className="bg-gray-900 pb-10">
            <div className="container mx-auto">
                <div className="max-w-screen-lg mx-auto">
                    <div className="text-center w-full mb-10">
                        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl text-white">Projects</h2>
                        <p className="mb-6 text-lg font-normal lg:text-xl text-gray-400">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-lg mx-auto gap-[30px] mt-16 md:px-5">
                        {
                            projects.map((item) => (
                                <ProjectCard
                                    key={item.id}
                                    {...item}
                                    onPress={() => setProject(item)}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    setProject(null);
                }}
                style={customStyles}
                closeTimeoutMS={200}
            >
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <LazyLoadImage 
                                src={project?.image} 
                                alt={project?.title} 
                                className="full-width rounded-lg" 
                            />
                            
                            <h5 className="mt-3 text-2xl font-bold tracking-tight text-white">{project?.title}</h5>
                            <p className="mb-4 font-normal text-gray-400">{project?.date}</p>

                            <div className="tags flex items-center content-center flex-wrap">
                                {
                                    project?.tags.map((tag) => (
                                        <span key={tag} className="mb-2 text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-600">{tag}</span>
                                    ))
                                }
                            </div>

                            <p className="mb-3 font-normal text-gray-300">{project?.description}</p>

                            <div className="flex space-x-4 mb-4 mt-5">
                                {
                                    project?.github && <a title="Github URL" href={project?.github} target="_blank" className="flex-1 rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 text-center">View Code</a>
                                }
                                <a href={project?.webapp} title="Live URL" target="_blank" type="button" className="flex-1 rounded-md bg-blue-700 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 text-center">View Live App</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    )
}
