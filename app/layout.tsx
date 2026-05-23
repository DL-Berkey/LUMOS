import "./globals.css"

import localFont from "next/font/local"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
