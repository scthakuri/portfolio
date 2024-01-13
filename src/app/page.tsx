"use client";

import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function Home() {
    
    return (
        <>
            <Navbar />

            <HeroImage />

            {/**Skill Section */}
            <LazyLoadComponent><Skills /></LazyLoadComponent>
            
            {/**Education Section */}
            <LazyLoadComponent><Education /></LazyLoadComponent>

            {/**Projects Section */}
            <LazyLoadComponent><Projects /></LazyLoadComponent>

            {/**Experience Section */}
            <LazyLoadComponent><Experience /></LazyLoadComponent>

            {/**Contact Section */}
            <LazyLoadComponent><Contact /></LazyLoadComponent>

            {/**Footer Section */}
            <Footer />

            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </>
    )
}
