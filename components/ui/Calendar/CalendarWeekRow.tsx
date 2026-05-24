import { cn } from "@/lib/utils"

const CalendarWeekRow = () => {
    return (
        <div className="grid grid-cols-7 items-center border-b-2 border-primary">
            {["일", "월", "화", "수", "목", "금", "토"].map((week, idx) => {
                return (
                    <div
                        key={idx}
                        className={cn(
                            "",
                            idx === 0 || idx === 6
                                ? "text-red-500"
                                : "text-gray-500"
                        )}
                    >
                        {week}
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarWeekRow
