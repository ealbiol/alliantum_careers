import * as React from "react"

export function SwitchModeButton({ themeData, setThemeData }) {

    const handleSwitch = () => {

        const newThemeData = (themeData === "dark" ? "light" : "dark")
        setThemeData(newThemeData)
        localStorage.theme = newThemeData
    }


    return (

        <div>
            <div class="button r" id="button-4">
                <input type="checkbox" class="checkbox" onChange={handleSwitch} checked={(themeData === "dark" ? true : false)} />
                <div class="knobs"></div>
                <div class="layer"></div>
            </div>
        </div>
    )
}