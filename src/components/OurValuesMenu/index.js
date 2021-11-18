import * as React from "react"
import { ValueCard } from "../ValueCard"
import ArrowLeft from "../../images/values-photos/arrow-left.svg"
import ArrowRight from "../../images/values-photos/arrow-right.svg"

export function OurValuesMenu({ allOurValues }) {

    const [showValueCard, setShowValueCard] = React.useState(1)
    // const handleValueIndex = (index) => setShowValueCard(index)

    console.log("showValueCard:---> ", showValueCard);


    console.log("allOurValues:--->", allOurValues);

    return (
        <div  >
            <div className="flex" >
                <div className="w-6/12 w-full">
                    <div>
                        <ul className="card-menu mx-0 flex flex-col px-0" >
                            {
                                allOurValues.map((value, index) => {
                                    return (

                                        <li key={index} className="flex w-full flex-grow" >
                                            <button
                                                className="p-4 flex-grow uppercase flex items-center justify-between cursor-pointer"
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
                <div className="w-6/12 w-full ml-2 bg-white rounded-xl overflow-hidden">
                    {showValueCard &&
                        <ValueCard value={allOurValues.find(value => value.id === showValueCard)} />
                    }
                </div>
            </div>
        </div >
    )
}

