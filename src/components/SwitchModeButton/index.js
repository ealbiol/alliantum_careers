import * as React from "react"

export function SwitchModeButton({ isDark, setIsDark }) {

    const handleSwitch = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)
        localStorage.theme = newIsDark ? "dark" : "light"
    }


    return (
        <p>
            <label className="switch">
                <input onChange={handleSwitch} type="checkbox" checked={isDark} />
                <span className="slider round"></span>
            </label>
        </p>
    )
}