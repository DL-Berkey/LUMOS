export type DayType = "previous" | "current" | "next"

export type CalendarDay = {
    dayType: DayType
    year: number
    month: number
    day: number
    isCurrentMonth: boolean
    isToday: boolean
}
