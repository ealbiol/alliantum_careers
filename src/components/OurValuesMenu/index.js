import * as React from "react"
import { ValueCard } from "../ValueCard"
import ArrowLeft from "../../images/values-photos/arrow-left.svg"
import ArrowRight from "../../images/values-photos/arrow-right.svg"


export function OurValuesMenu({ allOurValues }) {


    const [showValueCard, setShowValueCard] = React.useState(1)



    return (
        <div >
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
                <div className="w-6/12 w-full ml-2 rounded-xl overflow-hidden border border-white bg-bleach dark:bg-black dark:border-white">
                    {showValueCard &&
                        <ValueCard value={allOurValues.find(value => value.id === showValueCard)} />
                    }
                </div>
            </div>

            <p class="my-5 text-left">Closed</p>
            <div
                class="text-xl font-medium text-left bg-white hover:bg-gray-100 hover:bg-opacity-50 duration-300 p-3 rounded-lg"
                role="alert"
            >
                Click me to open!
            </div>

            <p class="my-5 text-left">Opened</p>

            <div
                class="text-xl font-medium text-left bg-white bg-gray-100 bg-opacity-50 duration-300 p-3 rounded-lg rounded-b-none"
                role="alert"
            >
                Opened
            </div>
            <div class="bg-gray-100 bg-opacity-50 p-3 pt-1 rounded-b-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                ipsam ipsa veniam, ratione incidunt dolores maiores nobis reprehenderit
                voluptas, quaerat delectus reiciendis corporis dolorum vero itaque unde
                ut corrupti tenetur?
            </div>
        </div >
    )

}