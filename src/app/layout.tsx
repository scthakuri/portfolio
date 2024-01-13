import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


const TITLE = 'Suresh Chand | Professional Web and Application Developer';
const DESCRIPTION = 'Expert developer in WordPress, React.js, React Native, and Node.js. I create smooth websites and apps using different technologies. Check out my work for innovative solutions.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    authors : {
        name : "Suresh Chand",
        url : "https://sureshchand.com.np"
    },
    keywords : ["Suresh Chand, Wordpress Developer, Full Stack Developer, React, React Native, Nextjs, Node, Programmer"],
    generator : "Next",
    referrer  : "origin",
    viewport : {
        initialScale : 1.0,
        width : "device-width"
    },
    creator : "Suresh Chand",
    openGraph : {
        type : "profile",
        title : TITLE,
        description : DESCRIPTION,
        url : "https://sureshchand.com.np",
        countryName : "Nepal",
        siteName : "Suresh Chand",
        images : [{
            url : "https://sureshchand.com.np/images/banner.png"
        }]
    },
    twitter : {
        card : "summary_large_image",
        title : TITLE,
        description : DESCRIPTION,
        creator : "Suresh Chand",
        site : "Suresh Chand",
        images : "https://sureshchand.com.np/images/banner.png"
    },
    category : "Portfolio"
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gray-900 antialiased">{children}</body>
        </html>
    )
}
