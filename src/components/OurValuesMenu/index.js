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
                                <div>{value.title}</div>
                                <ValueCard allOurValues={allOurValues} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}