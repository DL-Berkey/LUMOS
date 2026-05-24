import { Button } from "../button"

import { ChevronLeft, ChevronRight, Diamond } from "lucide-react"

type Props = {
    currentYear: string
    currentMonth: string
    goPreviousMonth: () => void
    goNextMonth: () => void
    goToday: () => void
}

const CalendarNavbar = ({
    currentYear,
    currentMonth,
    goPreviousMonth,
    goNextMonth,
    goToday,
}: Props) => {
    return (
        <nav className="flex items-center gap-2">
            <div className="">
                <h3 className="text-xl">{currentYear}</h3>
                <h2 className="text-5xl">{currentMonth}</h2>
            </div>
            <div>
                <Button
                    variant="outline"
                    size="lg"
                    className="rounded-none"
                    onClick={goPreviousMonth}
                >
                    <ChevronLeft />
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="rounded-none bg-primary"
                    onClick={goToday}
                >
                    <Diamond />
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="rounded-none"
                    onClick={goNextMonth}
                >
                    <ChevronRight />
                </Button>
            </div>
        </nav>
    )
}

export default CalendarNavbar
