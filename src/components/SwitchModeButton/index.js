import * as React from "react"

export function SwitchModeButton({ isDark, setIsDark }) {

    const handleSwitch = () => setIsDark(!isDark)


    return (
        <p>
            <label className="switch">
                <input onClick={handleSwitch} type="checkbox" />
                <span className="slider round"></span>
            </label>
        </p>
    )
}