import * as React from "react"
import { ValueCard } from "../ValueCard"

export function OurValuesMenu({ allOurValues }) {
    return (
        <div>
            <div>
                {
                    allOurValues.map((value, index) => {
                        return (
                            <div key={index}>
                                <ValueCard value={value} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}