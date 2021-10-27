import * as React from "react"
import { ValuePhoto } from "../ValuePhoto"

export function ValueCard({ value }) {
    return (
        <div style={{ border: "1px solid black" }} >
            <h3>{value.title}</h3>
            <div>{value.content}</div>
            <ValuePhoto value={value} />
        </div>
    )
}