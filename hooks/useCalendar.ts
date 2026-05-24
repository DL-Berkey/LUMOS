"use client"

import { useState } from "react"
import dayjs from "dayjs"
import "dayjs/locale/ko"

dayjs.locale("ko")

import { CalendarDay } from "@/types/calendarType"

const useCreateCalendar = (currentDate: dayjs.Dayjs) => {
    const today = dayjs()
    const isSameYearAndMonth = currentDate.isSame(today, "month")

    // 현재 달의 일 수
    const dayCountInCurrentMonth = currentDate.daysInMonth()
    // 현재 달의 첫번째 날의 요일
    const firstDayOfCurrentMonth = currentDate.startOf("month").day()

    // 이전 달
    const lastMonth = currentDate.subtract(1, "month")
    // 이전 달의 일 수
    const dayCountInLastMonth = lastMonth.daysInMonth()

    // 다음 달
    const nextMonth = currentDate.add(1, "month")

    const calendarDayList = Array.from({ length: 42 }).map((_, idx) => {
        const rawDay = idx - firstDayOfCurrentMonth + 1

        const isCurrentMonth = rawDay > 0 && rawDay <= dayCountInCurrentMonth

        const isToday = isSameYearAndMonth && rawDay === today.date()

        let year = currentDate.year()
        let month = currentDate.month() + 1
        let day = rawDay
        let dayType: CalendarDay["dayType"] = "current"

        // 이전 달의 일 계산
        if (rawDay <= 0) {
            dayType = "previous"
            year = lastMonth.year()
            month = lastMonth.month() + 1
            day = dayCountInLastMonth - firstDayOfCurrentMonth + idx + 1
        }

        // 다음 달의 일 계산
        if (rawDay > dayCountInCurrentMonth) {
            dayType = "next"
            year = nextMonth.year()
            month = nextMonth.month() + 1
            day = rawDay - dayCountInCurrentMonth
        }

        // 현재 달의 일 계산
        return {
            dayType,
            year,
            month,
            day,
            isCurrentMonth,
            isToday,
        }
    })

    return calendarDayList
}

const useCalendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs())

    const [selectedDate, setSelectedDate] = useState(dayjs())

    const calendarDayList = useCreateCalendar(currentDate)

    const currentYearName = currentDate.format("YYYY년")
    const currentMonthName = currentDate.format("M월")

    const currentDay = currentDate.date()

    const goPreviousMonth = () => {
        setCurrentDate((prev) => prev.subtract(1, "month"))
    }

    const goToday = () => {
        setCurrentDate(dayjs())
    }

    const goNextMonth = () => {
        setCurrentDate((prev) => prev.add(1, "month"))
    }

    const handleSelectedDate = (calendarDay: CalendarDay) => {
        const { year, month, day } = calendarDay

        setSelectedDate(dayjs(new Date(year, month - 1, day)))
    }

    const getIsSelectedDate = (calendarDay: CalendarDay) => {
        const { year, month, day } = calendarDay

        return dayjs(new Date(year, month - 1, day)).isSame(selectedDate, "day")
    }

    return {
        currentDate,
        selectedDate,
        currentYearName,
        currentMonthName,
        currentDay,
        calendarDayList,
        action: {
            goPreviousMonth,
            goToday,
            goNextMonth,
            handleSelectedDate,
            getIsSelectedDate,
        },
    }
}

export default useCalendar
