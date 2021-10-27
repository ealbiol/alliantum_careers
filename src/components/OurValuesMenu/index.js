import * as React from "react"
import { ValueCard } from "../ValueCard"

export function OurValuesMenu({ allOurValues }) {

    const [showValueCard, setShowValueCard] = React.useState(0)
    const onClickValueTitle = (id) => setShowValueCard(id)



    return (
        <div>
            <div>
                {
                    allOurValues.map((value, index) => {
                        return (
                            <div key={index}>
                                <button onClick={() => (onClickValueTitle(index))} >{value.title}</button>
                                <div>
                                    {
                                        showValueCard === index ? <ValueCard value={value} /> : null
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

