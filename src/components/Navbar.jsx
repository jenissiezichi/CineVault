import {gsap} from "gsap";


export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between"
             style={{ background: "rgba(10, 10, 20, 0.85)", backdropFilter: "blur(12px)" }}>
            <div className="text-xl font-bold tracking-wider">Cine<span className="text-purple-500">Vault</span></div>

            <ul className="hidden md:flex gap-8 text-sm text-gray-300 uppercase tracking-widest">
                {["Discover", "Movies", "TV Shows", "My List"].map((link) => (
                    <li
                        key={link}
                        className="cursor-pointer hover:text-purple-500 hover:border-b-2 hover:border-purple-700 transition-all duration-300"
                    >
                        {link}
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="bg-white/10 text-white text-sm px-4 py-2 rounded-full outline-none placeholder-gray-400 focus:ring-2 focus:ring-purple-500 w-48"
                />
                <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold cursor-pointer">
                    J
                </div>
            </div>

        </nav>
    )
}