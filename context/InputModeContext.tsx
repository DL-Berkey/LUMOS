import { createContext, useContext, useState } from "react"

const InputModeContext = createContext<{
    isInputMode: boolean
    switchInputMode: () => void
    handleInputMode: (value: boolean) => void
} | null>(null)

type Props = {
    children: React.ReactNode
}

export const InputModeProvider = ({ children }: Props) => {
    const [isInputMode, setIsInputMode] = useState(true)

    const switchInputMode = () => {
        setIsInputMode((prev) => !prev)
    }

    const handleInputMode = (value: boolean) => {
        setIsInputMode(value)
    }

    return (
        <InputModeContext.Provider
            value={{
                isInputMode,
                switchInputMode,
                handleInputMode,
            }}
        >
            {children}
        </InputModeContext.Provider>
    )
}

export const useInputModeContext = () => {
    const context = useContext(InputModeContext)

    if (!context) {
        throw new Error(
            "useInputModeContext must be used within an InputModeProvider"
        )
    }

    return context
}
