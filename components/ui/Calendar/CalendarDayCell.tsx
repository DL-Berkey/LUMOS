import { cn } from "@/lib/utils"

type Props = {
    isToday: boolean
    isSelected: boolean
    isCurrentMonth: boolean
    onClick: () => void
    children: React.ReactNode
}

const CalendarDayCell = ({
    isToday,
    isSelected,
    isCurrentMonth,
    onClick,
    children,
}: Props) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "rounded p-2 shadow-sm hover:scale-105 hover:cursor-pointer",
                !isCurrentMonth && "text-gray-400"
            )}
        >
            <div className="flex items-center justify-between">
                <span
                    className={cn(
                        "grid aspect-square size-6 place-items-center rounded-full",
                        isSelected &&
                            "bg-linear-to-r from-blue-400 to-primary text-white"
                    )}
                >
                    {children}
                </span>
                {isToday && <span className="text-sm">오늘</span>}
            </div>
        </div>
    )
}

export default CalendarDayCell
