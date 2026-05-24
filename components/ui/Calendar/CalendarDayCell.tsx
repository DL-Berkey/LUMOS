import { cn } from "@/lib/utils"

type Props = {
    isSelected: boolean
    isCurrentMonth: boolean
    onClick: () => void
    children: React.ReactNode
}

const CalendarDayCell = ({
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
                !isCurrentMonth && "text-gray-400",
                isSelected && "bg-primary text-white"
            )}
        >
            {children}
        </div>
    )
}

export default CalendarDayCell
