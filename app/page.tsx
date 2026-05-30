"use client"

import CalendarSection from "@/components/ui/Calendar/CalendarSection"
import InputSection from "@/components/ui/InputSection"
import { CalendarProvider } from "@/context/CalendarContext"
import { InputModeProvider } from "@/context/InputModeContext"

const Page = () => {
    return (
        <main className="flex h-full">
            <CalendarProvider>
                <InputModeProvider>
                    <InputSection />
                    <CalendarSection />
                </InputModeProvider>
            </CalendarProvider>
        </main>
    )
}

export default Page
