import React from 'react'
import AnchorLink from './AnchorLink'

export default function Footer() {
    return (
        <footer className="rounded-lg shadow bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://sureshchand.com.np/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Suresh Chand</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <AnchorLink href="#about" className="hover:underline me-4 md:me-6" aria-current="page">Home</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#skills" className="hover:underline me-4 md:me-6">Skills</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#education" className="hover:underline me-4 md:me-6">Education</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#projects" className="hover:underline me-4 md:me-6">Projects</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#contact" className="hover:underline me-4 md:me-6">Contact</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#experience" className="hover:underline">Experience</AnchorLink>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">© 2023 <a href="https://sureshchand.com.np/" className="hover:underline">Suresh Chand</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
