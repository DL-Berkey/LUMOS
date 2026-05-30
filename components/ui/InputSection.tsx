import { useCalendarContext } from "@/context/CalendarContext"
import { useInputModeContext } from "@/context/InputModeContext"

const InputSection = () => {
    const { selectedDate } = useCalendarContext()

    const { isInputMode } = useInputModeContext()

    if (!isInputMode) {
        return null
    }

    return <div className="flex-3">{selectedDate.format("YYYY-MM-DD")}</div>
}

export default InputSection
