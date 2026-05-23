"use client"

import { useState } from "react"
import dayjs from "dayjs"

const useCalendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs())

    const currentYear = currentDate.year()
    const currentMonth = currentDate.month() + 1 + "월"
    const currentDay = currentDate.date()

    const dayCountInCurrentMonth = currentDate.daysInMonth()
    const firstDayOfCurrentMonth = currentDate.startOf("month").day()

    const lastMonth = currentDate.subtract(1, "month")
    const dayCountInLastMonth = lastMonth.daysInMonth()

    const calendarDayList = Array.from({ length: 42 }).map((_, idx) => {
        const rawDay = idx - firstDayOfCurrentMonth + 1

        const isCurrentMonth = rawDay > 0 && rawDay <= dayCountInCurrentMonth

        let day = rawDay
        let dayType: "previous" | "current" | "next" = "current"

        // 이전 달의 일 계산
        if (rawDay <= 0) {
            day = dayCountInLastMonth - firstDayOfCurrentMonth + idx + 1
            dayType = "previous"
        }

        // 다음 달의 일 계산
        if (rawDay > dayCountInCurrentMonth) {
            day = rawDay - dayCountInCurrentMonth
            dayType = "next"
        }

        // 현재 달의 일 계산
        return {
            dayType,
            day,
            isCurrentMonth,
            isToday: rawDay === currentDay,
        }
    })

    const setPreviousMonth = () => {
        setCurrentDate((prev) => prev.subtract(1, "month"))
    }

    const resetCurrentMonth = () => {
        setCurrentDate(dayjs())
    }

    const setNextMonth = () => {
        setCurrentDate((prev) => prev.add(1, "month"))
    }

    return {
        currentDate,
        currentYear,
        currentMonth,
        currentDay,
        calendarDayList,
        action: {
            setPreviousMonth,
            resetCurrentMonth,
            setNextMonth,
        },
    }
}

export default useCalendar
