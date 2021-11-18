
import * as React from "react"
import { ValuePhoto } from "../ValuePhoto"
export function ValueCard({ value }) {
    console.log("Value inside ValueCard:--->", value);
    return (
        value ?
<<<<<<< HEAD
            <div>
                <ValuePhoto className="w-100" value={value} />
                <div className="p-4">
                    <h3 className="text-uppercase text-uppercase text-cornflower-blue uppercase">{value.title}</h3>
                    <p className="text-sm">{value.content}</p>
=======
            <div className="w-6/12">
                <div className="rounded-lg bg-white overflow-hidden" >
                    <ValuePhoto className="w-100" value={value} />
                    <div className="p-4">
                        <h3 className="text-uppercase">{value.title}</h3>
                        <div>{value.content}</div>
                    </div>
>>>>>>> 4aa12a12eb2a648d14ba24796aa5f99188d436ea
                </div>
            </div>
            :
            null
    )
}