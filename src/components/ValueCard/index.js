import * as React from "react"
import { ValuePhoto } from "../ValuePhoto"

export function ValueCard({ allOurValues }) {
    return (
        <div>
            <ValuePhoto allOurValues={allOurValues} />
            <div>Value Card</div>
        </div>
    )
}