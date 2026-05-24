"use client"

import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <label className="relative flex gap-1 p-1 cursor-pointer rounded-2xl bg-linear-to-r from-blue-400 to-primary">
            <input
                type="checkbox"
                name="theme input"
                checked={resolvedTheme === "dark"}
                onChange={() =>
                    setTheme(resolvedTheme === "light" ? "dark" : "light")
                }
                className="sr-only peer"
            />

            <Moon className="text-yellow-400 size-4" />
            <Sun className="text-orange-400 size-4" />
            <div className="absolute transition-all duration-300 translate-x-0 bg-white rounded-full shadow-sm peer size-4 peer-checked:ml-1 peer-checked:translate-x-full"></div>
        </label>
    )
}

export default ThemeButton
