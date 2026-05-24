import "./globals.css"

import localFont from "next/font/local"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import Header from "@/components/layout/Header"

export const metadata = {
    title: "LUMOS",
    description: "Lumori Ultimate Multi Operating System",
}

const font = localFont({
    src: "../public/font/Pretendard-Regular.woff2",
})

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html
            lang="ko"
            suppressHydrationWarning
            className={cn("antialiased", font.className)}
        >
            <body className="bg-background">
                <ThemeProvider>
                    <div className="container mx-auto grid h-dvh grid-cols-1 grid-rows-[1fr_16fr] bg-background">
                        <Header />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
