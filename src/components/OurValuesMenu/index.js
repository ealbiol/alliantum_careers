import * as React from "react"
import { ValueCard } from "../ValueCard"
import ArrowLeft from "../../images/values-photos/arrow-left.svg"
import ArrowRight from "../../images/values-photos/arrow-right.svg"

export function OurValuesMenu({ allOurValues }) {

    const [showValueCard, setShowValueCard] = React.useState(1)

    console.log("showValueCard:---> ", showValueCard);
    console.log("allOurValues:--->", allOurValues);

    return (
        <div  >

            <div>
                <div className="flex my-6" >
                    <div className="w-6/12">
                        <div>
                            <ul className="card-menu flex flex-col" >
                                {
                                    allOurValues.map((value, index) => {
                                        return (

                                            <li key={index} className="flex w-full flex-grow" >
                                                <button
                                                    className="p-4 flex-grow uppercase flex justify-between cursor-pointer"
                                                    onClick={() => (setShowValueCard(value.id))}
                                                >
                                                    {value.title}
                                                    <span className="block">{showValueCard === value.id ? <ArrowLeft /> : <ArrowRight />}</span>
                                                </button>
                                            </li>

                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            </div >


            <div style={{ border: "1px solid black" }} >
                <div>
                    {showValueCard &&
                        <ValueCard value={allOurValues.find(value => value.id === showValueCard)} />
                    }
                </div>
            </div>

        </div >
    )
}

