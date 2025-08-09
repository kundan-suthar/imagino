"use client"

import Link from "next/link";
// import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
    const [glitchActive, setGlitchActive] = useState(false);



    // const scrollY = useScrollPosition();


    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden top-20">
            <div className="relative z-10 text-center px-4">
                <h1 className={`text-6xl lg:text-8xl font-black mb-8 transition-all duration-200 ${glitchActive ? 'animate-pulse' : ''
                    }`}>
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                        The Future of
                    </span>
                    <br />
                    <span className="text-white">Image Creation</span>
                </h1>

                <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Harness the power of quantum AI to transform your images beyond imagination.
                    Experience neural-powered editing that thinks, learns, and creates.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
                    <Link href="/dashboard">

                        <button className="hover:cursor-pointer cursor-hover bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            Experience the Magic
                        </button>
                    </Link>
                    <button className="hover:cursor-pointer cursor-hover backdrop-blur-lg bg-white/10 border border-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
                        Watch Demo
                    </button>
                </div>
            </div>

            {/* 3D Demo Interface */}
            {/* <div
                className="absolute right-10 top-1/2 transform -translate-y-1/2 w-96 h-64 perspective-1000 hidden lg:block"
                style={{ transform: `translateY(-50%) translateX(${scrollY * 0.1}px)` }}
            >
                <div className="relative w-full h-full transform rotate-y-12 rotate-x-6">
                    <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/20 rounded-2xl p-6">
                        <div className="w-full h-32 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg mb-4 animate-pulse" />
                        <div className="flex space-x-2">
                            <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce" />
                            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-4 h-4 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}

export default HeroSection


