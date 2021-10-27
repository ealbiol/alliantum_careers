import * as React from "react"
import { ValueCard } from "../ValueCard"

export function OurValuesMenu({ allOurValues }) {

    const [showValueCard, setShowValueCard] = React.useState(false)
    const onClickValueTitle = () => setShowValueCard(!showValueCard)



    return (
        <div>
            <div>
                {
                    allOurValues.map((value, index) => {
                        return (
                            <div key={index}>
                                <button onClick={onClickValueTitle} >{value.title}
                                </button>
                                {
                                    showValueCard ? <ValueCard value={value} /> : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

