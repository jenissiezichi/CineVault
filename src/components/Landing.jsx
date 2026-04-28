import {gsap} from "gsap"
import Typed from "typed.js"
import {useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import {Navbar} from "./Navbar.jsx";
import {Hero} from "./Hero.jsx";


const Landing = ({query, setQuery, handleSearch}) => {
    useGSAP(()=>{
        gsap.from("#text",{
            y:-60,
            opacity:0,
            ease:'bounce.out',
            duration: 2
        })
 gsap.from("#p",{
     y:40,
     opacity:0,
     ease:'power2.inOut',
     duration: 2
 })
    },[])
    const typedRef = useRef(null);
   useEffect(() => {
       const typed = new Typed(typedRef.current,{
           strings: ['Search Any Movie......','Save To Your WatchList.....',
               'Never Forget A Film....'],
           typeSpeed: 80,
           backSpeed: 35,
           loop:true,
       })
       return () => typed.destroy()
   },[])
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-white"
             style={{
                 background: "radial-gradient(circle at 50% 20%, #2d1b69 0%, #0a0a0f 70%)"
             }}
        >
            <Navbar/>
<Hero/>
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
                    filter: "blur(60px)"
                }}
            />
<h1 id="text" className="text-5xl font-black tracking-widest relative z-10 md:text-7xl">CINE
    <span className="text-purple-500">VAULT</span>
</h1>
                <p id="p" className="mt-4 text-xl text-gray-400 font-semibold tracking-widest z-10">
                    <span ref={typedRef}/>
                </p>

            <div className="mt-4 flex gap-3 relative z-10 w-full max-w-xl px-4">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)
                //this updates Query value
                }
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()
                // this enables each search to be based as you are typing so you don't need to click search a times to search
                }
                    placeholder="Search Any Movie....."
                    className="flex-1 px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 outline-none focus:outline-none focus:ring-2 focus:ring-purple-400"/>
         <button onClick={handleSearch}
             className="cursor-pointer px-6 py-3 rounded-lg bg-yellow-400 text-gray-950 font-bold hover:bg-yellow-300 transition-all ">Search</button>
            </div>


            <div className="w-full px-8 mt-8 pb-16 relative z-10">

                {/* Section header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold tracking-tight uppercase">
                        🔥 Trending Now
                    </h2>
                    <span className="px-4 text-purple-400 text-sm cursor-pointer hover:text-purple-300 transition-all">
                            View All →
                        </span>
                </div>






            </div>


        </div>
    );
}
export default Landing