import * as React from "react"
import { ValueCard } from "../ValueCard"
import ArrowLeft from "../../images/values-photos/arrow-left.svg"
import ArrowRight from "../../images/values-photos/arrow-right.svg"
import { OurValuesMenuAccordion } from "../OurValuesMenuAccordion"


export function OurValuesMenu({ allOurValues }) {


    const [showValueCard, setShowValueCard] = React.useState(1)



    return (
        <div id="our-values">

            <div className="hidden xl:block">
                <div className="container mx-auto mt-6 mb-2">
                    <h3 className="title text-md xl:w-6/12">Our values</h3>
                </div>
                <div className="xl:flex">
                    <div className="w-6/12">
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
                    <div className="w-6/12 ml-2 rounded-xl overflow-hidden border bg-bleach dark:bg-black dark:border dark:border-white">
                        {showValueCard &&
                            <ValueCard value={allOurValues.find(value => value.id === showValueCard)} />
                        }
                    </div>
                </div>
            </div>

            <OurValuesMenuAccordion />

        </div>
    )
}