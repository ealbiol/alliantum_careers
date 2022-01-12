import * as React from "react"

export function SwitchModeButton({ themeData, setThemeData }) {

    const handleSwitch = () => {

        const newThemeData = (themeData === "dark" ? "light" : "dark")
        setThemeData(newThemeData)
        localStorage.theme = newThemeData
    }


    return (

        <div>
            <div className="button r" id="button-4">
                <input type="checkbox" className="checkbox" aria-label="Dark Mode checkbox" onChange={handleSwitch} checked={(themeData === "dark" ? true : false)} />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
        </div>
    )
}