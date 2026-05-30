import { Dayjs } from "dayjs"

export type DayType = "previous" | "current" | "next"

export type CalendarDay = {
    dayType: DayType
    year: number
    month: number
    day: number
    isCurrentMonth: boolean
    isToday: boolean
}

export type CalendarContextType = {
    currentDate: Dayjs
    selectedDate: Dayjs
    currentYearName: string
    currentMonthName: string
    currentDay: number
    calendarDayList: CalendarDay[]
    action: {
        goPreviousMonth: () => void
        goToday: () => void
        goNextMonth: () => void
        handleSelectedDate: (calendarDay: CalendarDay) => void
        getIsSelectedDate: (calendarDay: CalendarDay) => boolean
    }
}
