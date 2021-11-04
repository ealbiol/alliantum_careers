import * as React from "react"

export function SwitchModeButton() {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>

            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>

            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>

            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>


        </div>
    )
}