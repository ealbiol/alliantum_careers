import * as React from "react"

export function SwitchModeButton({ themeData, setThemeData }) {

    const handleSwitch = () => {

        const newThemeData = (themeData === "dark" ? "light" : "dark")
        setThemeData(newThemeData)
        localStorage.theme = newThemeData
    }


    return (
        <p>
            <label className="switch">
                <input onChange={handleSwitch} type="checkbox" checked={themeData} />
                <span className="slider round"></span>
            </label>
        </p>
    )
}