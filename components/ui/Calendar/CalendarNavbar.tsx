import { Button } from "../button"
import { ButtonGroup, ButtonGroupSeparator } from "../button-group"
import { Separator } from "../separator"

import {
    ChevronLeft,
    ChevronRight,
    Diamond,
    Image,
    StickyNote,
} from "lucide-react"

type Props = {
    currentYearName: string
    currentMonthName: string
    handleInputMode: () => void
    goPreviousMonth: () => void
    goNextMonth: () => void
    goToday: () => void
}

const CalendarNavbar = ({
    currentYearName,
    currentMonthName,
    handleInputMode,
    goPreviousMonth,
    goNextMonth,
    goToday,
}: Props) => {
    return (
        <nav className="relative grid place-items-center">
            <ButtonGroup className="absolute top-1/2 left-0 -translate-y-1/2 gap-1">
                <Button variant="ghost" size="lg" onClick={handleInputMode}>
                    <StickyNote className="text-primary" />
                    작성
                </Button>
                <ButtonGroupSeparator />
                <Button variant="ghost" size="lg">
                    <Image className="text-primary" />
                    주차별 일정
                </Button>
            </ButtonGroup>
            <div className="mx-auto flex w-fit flex-col items-center justify-center">
                <h2 className="text-3xl">
                    <span className="mr-2">{currentYearName}</span>
                    <span>{currentMonthName}</span>
                </h2>
                <ButtonGroup>
                    <Button
                        variant="ghost"
                        size="icon-lg"
                        className="rounded-none"
                        onClick={goPreviousMonth}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon-lg"
                        className="rounded-none"
                        onClick={goToday}
                    >
                        <Diamond className="text-primary" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon-lg"
                        className="rounded-none"
                        onClick={goNextMonth}
                    >
                        <ChevronRight />
                    </Button>
                </ButtonGroup>
            </div>
            <div className="absolute top-0 right-0"></div>
        </nav>
    )
}

export default CalendarNavbar
