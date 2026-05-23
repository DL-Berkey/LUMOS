import { useState } from "react"

import { Button } from "../button"
import { cn } from "@/lib/utils"

import useCalendar from "@/hooks/useCalendar"

const CalendarSection = () => {
    const { currentMonth, calendarDayList, action } = useCalendar()

    const [inputMode, setInputMode] = useState(false)

    return (
        <section className="flex h-full">
            {inputMode && <div className="flex-3">jo</div>}
            <div className="grid h-full flex-7 grid-rows-[6rem_2rem_1fr] p-2">
                <nav className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={action.setPreviousMonth}
                    >
                        이전 달
                    </Button>
                    <h2>{currentMonth}</h2>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={action.setNextMonth}
                    >
                        다음 달
                    </Button>
                </nav>
                <div className="grid grid-cols-7 place-items-center border-b-2 border-indigo-300 text-sm">
                    {["일", "월", "화", "수", "목", "금", "토"].map(
                        (week, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={
                                        idx === 0 || idx === 6
                                            ? "text-red-500"
                                            : "text-gray-500"
                                    }
                                >
                                    {week}
                                </div>
                            )
                        }
                    )}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {calendarDayList.map((dayData, idx) => {
                        return (
                            <div
                                key={idx}
                                onClick={() => {
                                    switch (dayData.dayType) {
                                        case "previous":
                                            action.setPreviousMonth()

                                            break
                                        case "next":
                                            action.setNextMonth()

                                            break
                                        default:
                                            break
                                    }

                                    setInputMode((prev) => !prev)
                                }}
                                className={cn(
                                    "rounded p-2 shadow-sm hover:scale-105 hover:cursor-pointer",
                                    !dayData.isCurrentMonth && "text-gray-400"
                                )}
                            >
                                {dayData.day}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CalendarSection
