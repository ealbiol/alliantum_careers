import * as React from "react"
import { ValuePhoto } from "../ValuePhoto"

export function ValueCard({ value }) {

    console.log("Value inside ValueCard:--->", value);

    return (
<<<<<<< HEAD

        <div className="" >
            <ValuePhoto className="w-100" value={value} />
            <div className="p-4">
                <h3 className="text-md text-uppercase text-cornflower-blue uppercase">{value?.title}</h3>
                <p className="text-sm">{value?.content}</p>
=======
        value ?
            <div className="w-6/12">
                <div className="rounded-lg bg-white overflow-hidden" >
                    <ValuePhoto className="w-100" value={value} />
                    <div className="p-4">
                        <h3 className="text-uppercase">{value.title}</h3>
                        <div>{value.content}</div>
                    </div>
                </div>
>>>>>>> 596054f8535302a669f6de421c1f50a1f8806df3
            </div>
            :
            null
    )

}