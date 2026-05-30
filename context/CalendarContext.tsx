import { createContext, useContext, useState } from "react"

import { CalendarContextType } from "@/types/calendarType"
import useCalendar from "@/hooks/useCalendar"

const CalendarContext = createContext<CalendarContextType | null>(null)

type Props = {
    children: React.ReactNode
}

export const CalendarProvider = ({ children }: Props) => {
    const data = useCalendar()

    return (
        <CalendarContext.Provider value={data}>
            {children}
        </CalendarContext.Provider>
    )
}

export const useCalendarContext = () => {
    const context = useContext(CalendarContext)

    if (!context) {
        throw new Error(
            "useCalendarContext must be used within a CalendarProvider"
        )
    }

    return context
}
