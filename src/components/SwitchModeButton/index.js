import * as React from "react"

export function SwitchModeButton({ themeData, setThemeData }) {

    const handleSwitch = () => {

        const newThemeData = (themeData === "dark" ? "light" : "dark")
        setThemeData(newThemeData)
        localStorage.theme = newThemeData
    }


    return (

        <div>

            <div className="switch">
                <input onChange={handleSwitch} checked={(themeData === "dark" ? true : false)} type="checkbox" />
                <span className="button"></span>
                <span className="label">

                </span>
            </div>

        </div>
    )
}