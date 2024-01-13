import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import AnchorLink from './AnchorLink';

const Navbar = () => {
    const [isMenuHidden, setIsMenuHidden] = useState(true);
    const [className, setClassName] = useState<string>("bg-transparent");
    useEffect(() => {
        try {
            const onScroll = () => {
                if (window.scrollY > 100) {
                    setClassName("bg-blue-800 sticky top-0 z-[99]");
                } else {
                    setClassName("bg-transparent");
                }
            };
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <nav className={`${className}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a title="Suresh Chand" href="https://sureshchand.com.np/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">Suresh Chand</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a title="Contact Me" href="mailto:sureshchand12a@gmail.com" className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800">Hire me</a>

                    <button onClick={() => setIsMenuHidden(!isMenuHidden)}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none  text-gray-400" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuHidden ? 'hidden' : ''} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-transparent">
                        <li>
                            <AnchorLink title="About Me" href="#about" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-200 md:hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Home</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink title="My Skills" href="#skills" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-200 md:hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Skills</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink title="My Education" href="#education" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-200 md:hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Education</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink title="My Projects" href="#projects" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-200 md:hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Projects</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink title="My Experience" href="#experience" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-200 md:hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Experience</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink title="Contact Me" href="#contact" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-200 md:hover:text-blue-500  text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent  border-gray-700">Contact</AnchorLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;