import ThemeButton from "./ThemeButton"

import logo from "@/public/logo.png"

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center">
                <img src={logo.src} alt="lumos logo" className="size-8" />
                <h1 className="text-xl font-bold tracking-widest text-transparent bg-linear-to-r from-blue-400 to-primary bg-clip-text">
                    LUMOS
                </h1>
            </div>
            <ThemeButton />
        </header>
    )
}

export default Header
