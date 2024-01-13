import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


const TITLE = 'Suresh Chand | Professional Web and Application Developer';
const DESCRIPTION = 'I am a web Designer with extensive experience for over 3 years. My expertise is to create website, App Development using React Native and more.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    authors : {
        name : "Suresh Chand",
        url : "https://sureshchand.com.np"
    },
    generator : "Next",
    viewport : {
        initialScale : 1.0,
        width : "device-width"
    },
    creator : "Suresh Chand",
    openGraph : {
        title : TITLE,
        description : DESCRIPTION,
        url : "https://sureshchand.com.np",
        countryName : "Nepal",
        siteName : "Suresh Chand"
    },
    twitter : {
        title : TITLE,
        description : DESCRIPTION,
        creator : "Suresh Chand",
        site : "Suresh Chand"
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
            <body className="dark:bg-gray-900 antialiased">{children}</body>
        </html>
    )
}
