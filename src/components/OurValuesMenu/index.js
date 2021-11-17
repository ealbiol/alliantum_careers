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
                                <div className="flex">
                                    <div className="w-6/12">
                                        <button onClick={() => (onClickValueTitle(index))} >{value.title}</button>
                                    </div>
                                    <div className="w-6/12">
                                        {
                                            showValueCard === index ? <ValueCard value={value} /> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="flex">
                    <div className="w-6/12">Lorem</div>
                    <div className="w-6/12">Ipsum</div>
                </div>
            </div >
        </div >
    )
}