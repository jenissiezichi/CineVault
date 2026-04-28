import gsap from "gsap";
import {useGSAP} from "@gsap/react";
export const Hero = () => {

    return (
        <div className="relative w-full min-h-screen
        flex items-end pb-32 px-16"
        >

            <div className="absolute inset-0 z-0"
            style={{background:"radial-gradient(ellipse at 70% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 70%)"}}/>

            <div className="relative max-w-xl z-10">
<div className="flex gap-3 mb-4">
    <span className="bg-purple-600 text-white text-xs font-bold px-8 py-2 rounded-full">SCI-FI</span>
<span className="text-gray-400 text-xs flex items-center gap-1">
    ⭐ 4.8
</span>
    <span className="text-gray-400 text-xs flex items-center">
        2024 . 2h 14m
    </span>
</div>
    <h1 className="text-5xl font-black leading-none uppercase tracking-tight mb-6">
        Neon
    </h1>

                <p className="text-gray-400 text-xs leading-relaxed mb-8 max-w-md">
                    In a dystopian future where dreams are currency, a rogue architect must
                    navigate the neon-lit underworld to steal the ultimate prize: reality itself
                </p>

                <div className="flex gap-8">
                    <button className="flex items-center gap-2 font-bold px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transistion-all duration-300 cursor-pointer">Watch Trailer</button>
                <button className="flex items-cnter gap-2 border border-white/30 rounded-full hover:border-white font-bold px-6 py-3
transition-all duration-300 backdrop-blur-sm cursor-pointer">+ Add to Watchlist</button>
                </div>

            </div>
        </div>
    )
}