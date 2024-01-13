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

    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Suresh Chand",
        "url": "https://sureshchand.com.np",
        "image": "https://sureshchand.com.np/images/HeroImage.png",
        "sameAs": [
            "https://facebook.com/sc.thakuri",
            "https://twitter.com/scthakuri",
            "https://instagram.com/sc.thakuri",
            "https://www.linkedin.com/in/scthakuri/",
            "https://github.com/scthakuri/",
            "https://sureshchand.com.np"
        ],
        "jobTitle": "Full Stack Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Klixsoft Pvt. Ltd."
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
