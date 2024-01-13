import React from 'react'
import { ProjectType } from '../constants/types'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function ProjectCard(props: ProjectType & {
    onPress: () => void
}) {
    return (
        <div onClick={props.onPress} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <LazyLoadImage
                src={props?.image}
                alt={props?.title}
                className="w-full h-[215px] rounded-t-lg"
            />
            
            <div className="p-5">
                <div className="tags flex items-center content-center flex-wrap">
                    {
                        props.tags.map((tag) => (
                            <span key={tag} className="mb-2 bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{tag}</span>
                        ))
                    }
                </div>

                <h5 className="line-clamp-1 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>

                <p className="line-clamp-3 mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                <button onClick={props.onPress} className="w-full p-3 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Project
                </button>
            </div>
        </div>
    )
}
