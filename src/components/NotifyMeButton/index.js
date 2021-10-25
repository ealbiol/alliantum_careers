import * as React from "react"

export function NotifyMeButton({ style }) {
    return (
        <button style={style} >
            <span>(Bell Icon){" "}</span>
            <span>Notify me on new jobs</span>
        </button>
    )
}