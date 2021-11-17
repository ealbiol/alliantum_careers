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
                            <div key={index} className="flex my-6" >
                                <div className="w-6/12">
                                    <div>
                                        <ul className="card-menu flex flex-col" >
                                            <li className="flex w-full flex-grow" ><button className="p-4 flex-grow uppercase flex justify-between cursor-pointer" onClick={() => (onClickValueTitle(index))} >{value.title}</button></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="w-6/12">
                                    {
                                        showValueCard === index ? <ValueCard value={value} /> : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div >




        </div >
    )
}

