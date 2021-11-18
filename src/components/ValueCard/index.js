import * as React from "react"
import { ValuePhoto } from "../ValuePhoto"

export function ValueCard({ value }) {

    console.log("Value inside ValueCard:--->", value);

    return (
        value ?
            <div>
                <ValuePhoto className="w-100" value={value} />
                <div className="p-4">
                    <h3 className="text-uppercase text-uppercase text-cornflower-blue uppercase">{value.title}</h3>
                    <p className="text-sm">{value.content}</p>
                </div>
            </div>
            :
            null
    )
}