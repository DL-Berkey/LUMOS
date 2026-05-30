import { useCalendarContext } from "@/context/CalendarContext"
import { useInputModeContext } from "@/context/InputModeContext"
import { CalendarDay } from "@/types/calendarType"
import CalendarNavbar from "./CalendarNavbar"
import CalendarWeekbar from "./CalendarWeekbar"
import CalendarDayCell from "./CalendarDayCell"

const CalendarSection = () => {
    const { calendarDayList, action } = useCalendarContext()

    const { switchInputMode, handleInputMode } = useInputModeContext()

    const handleClickDayCell = (calendarDay: CalendarDay) => {
        const isSelectedDate = action.getIsSelectedDate(calendarDay)

        if (isSelectedDate) {
            switchInputMode()

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

        handleInputMode(true)
        action.handleSelectedDate(calendarDay)
    }

    return (
        <section className="grid h-full flex-7 grid-rows-[6rem_2rem_1fr] pb-4">
            <CalendarNavbar />
            <CalendarWeekbar />
            <div className="grid grid-cols-7 gap-1">
                {calendarDayList.map((calendarDay, idx) => {
                    const isSelectedDate = action.getIsSelectedDate(calendarDay)

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
        </section>
    )
}

export default CalendarSection
