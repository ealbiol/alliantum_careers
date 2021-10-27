import * as React from "react"
import { ValuePhoto } from "../ValuePhoto"

export function ValueCard({ value }) {
    return (
        <div>
            <h3>{value.title}</h3>
            <div>{value.content}</div>
            <ValuePhoto value={value} />
        </div>
    )
}