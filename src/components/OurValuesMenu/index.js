import * as React from "react"

export function OurValuesMenu({ allOurValues }) {
    return (
        <div>
            <div>
                {
                    allOurValues.map((value, index) => {
                        return (
                            <div key={index}>
                                <div>{value.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}