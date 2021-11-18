import * as React from "react"
import { ValuePhoto } from "../ValuePhoto"

export function ValueCard({ value }) {

    console.log("Value inside ValueCard:--->", value);

    return (
        value ?
            <div className="w-6/12">
                <div className="rounded-lg bg-white overflow-hidden" >
                    <ValuePhoto className="w-100" value={value} />
                    <div className="p-4">
                        <h3 className="text-uppercase">{value.title}</h3>
                        <div>{value.content}</div>
                    </div>
                </div>
            </div>
            :
            null
    )
}