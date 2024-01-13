import React from 'react'
import { ProjectType } from '../constants/types'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function ProjectCard(props: ProjectType & {
    onPress: () => void
}) {
    return (
        <div onClick={props.onPress} className="border border-gray-700 rounded-lg shadow bg-gray-800">
            <LazyLoadImage
                src={props?.image}
                alt={props?.title}
                className="w-full h-[215px] rounded-t-lg"
            />
            
            <div className="p-5">
                <div className="tags flex items-center content-center flex-wrap">
                    {
                        props.tags.map((tag) => (
                            <span key={tag} className="mb-2 text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-600">{tag}</span>
                        ))
                    }
                </div>

                <h2 className="line-clamp-1 mb-2 text-2xl font-bold tracking-tight text-white">{props.title}</h2>

                <p className="line-clamp-3 mb-3 font-normal text-gray-400">{props.description}</p>
                <button onClick={props.onPress} className="w-full p-3 mt-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-700 hover:bg-blue-700 focus:ring-blue-800">
                    View Project
                </button>
            </div>
        </div>
    )
}
