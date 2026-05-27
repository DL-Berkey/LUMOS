import { useState } from "react"

import useCalendar from "@/hooks/useCalendar"
import { CalendarDay } from "@/types/calendarType"
import CalendarNavbar from "./CalendarNavbar"
import CalendarWeekRow from "./CalendarWeekRow"
import CalendarDayCell from "./CalendarDayCell"

const CalendarSection = () => {
    const {
        currentDate,
        selectedDate,
        currentYearName,
        currentMonthName,
        calendarDayList,
        action,
    } = useCalendar()

    const [inputMode, setInputMode] = useState(true)

    const handleInputMode = () => {
        setInputMode((prev) => !prev)
    }

    const handleClickDayCell = (calendarDay: CalendarDay) => {
        const isSelectedDate = action.getIsSelectedDate(calendarDay)

        if (isSelectedDate) {
            setInputMode((prev) => !prev)

            return
        }

        switch (calendarDay.dayType) {
            case "previous":
                action.goPreviousMonth()

                break
            case "next":
                action.goNextMonth()

                break
            default:
                break
        }

        setInputMode(true)
        action.handleSelectedDate(calendarDay)
    }

    return (
        <section className="flex h-full">
            {inputMode && (
                <div className="flex-3">
                    {selectedDate.format("YYYY-MM-DD")}
                </div>
            )}
            <div className="grid h-full flex-7 grid-rows-[6rem_2rem_1fr] pb-4">
                <CalendarNavbar
                    currentYearName={currentYearName}
                    currentMonthName={currentMonthName}
                    handleInputMode={handleInputMode}
                    goPreviousMonth={action.goPreviousMonth}
                    goNextMonth={action.goNextMonth}
                    goToday={action.goToday}
                />
                <CalendarWeekRow />
                <div className="grid grid-cols-7 gap-1">
                    {calendarDayList.map((calendarDay, idx) => {
                        const isSelectedDate =
                            action.getIsSelectedDate(calendarDay)

                        return (
                            <CalendarDayCell
                                key={idx}
                                isToday={calendarDay.isToday}
                                isSelected={isSelectedDate}
                                isCurrentMonth={calendarDay.isCurrentMonth}
                                onClick={() => handleClickDayCell(calendarDay)}
                            >
                                {calendarDay.day}
                            </CalendarDayCell>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CalendarSection
