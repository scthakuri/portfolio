"use client";

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

export default function Home() {

    const profileJSONLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "dateCreated": "2024-01-13T12:34:00-05:00",
        "dateModified": "2024-01-13T14:53:00-05:00",
        "mainEntity": {
            "@type": "Person",
            "name": "Suresh Chand",
            "alternateName": "scthakuri",
            "identifier": "scthakuri",
            "interactionStatistic": [{
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/FollowAction",
                "userInteractionCount": 786
            }, {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/LikeAction",
                "userInteractionCount": 9845
            }],
            "agentInteractionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WriteAction",
                "userInteractionCount": 34
            },
            "description": "Expert developer in WordPress, React.js, React Native, and Node.js. I create smooth websites and apps using different technologies. Check out my work for innovative solutions.",
            "image": "https://sureshchand.com.np/images/HeroImage.png",
            "sameAs": [
                "https://facebook.com/sc.thakuri",
                "https://twitter.com/scthakuri",
                "https://instagram.com/sc.thakuri",
                "https://www.linkedin.com/in/scthakuri/",
                "https://github.com/scthakuri/",
                "https://sureshchand.com.np"
            ]
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJSONLd) }}
            />

            <Navbar />

            <HeroImage />

            {/**Skill Section */}
            <Skills />

            {/**Education Section */}
            <Education />

            {/**Projects Section */}
            <Projects />

            {/**Experience Section */}
            <Experience />

            {/**Contact Section */}
            <Contact />

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
