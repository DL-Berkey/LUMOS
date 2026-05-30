import { cn } from "@/lib/utils"

const CalendarWeekbar = () => {
    return (
        <div className="grid grid-cols-7 items-center bg-gray-100">
            {[
                "일요일",
                "월요일",
                "화요일",
                "수요일",
                "목요일",
                "금요일",
                "토요일",
            ].map((week, idx) => {
                return (
                    <div
                        key={idx}
                        className={cn(
                            "text-center",
                            (idx === 0 || idx === 6) && "text-red-500"
                        )}
                    >
                        {week}
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarWeekbar
