"use client";

import { log } from "console";

export default function AboutPage() {
    console.log("This is Server Side Rendering")
    return (
        <main className="p-10">
            <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-white max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">About Us</h1>
                <p className="text-lg leading-relaxed">This is a simple blog app built using Next.js and TypeScript to demonstrate routing and SSR.</p>
            </div>
        </main>
    );
}
