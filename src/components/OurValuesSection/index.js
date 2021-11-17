import * as React from "react"
import { getAllOurValues } from "../../data/data"
import { OurValuesMenu } from "../OurValuesMenu"
import { AnchorLink } from "gatsby-plugin-anchor-links";


export function OurValuesSection() {

    const [allOurValues, setAllOurValues] = React.useState([])

    React.useEffect(() => {
        getAllOurValues().then((result) => {
            setAllOurValues(result)
        })
    }, [])

    return (
        <div>
            <div className="container-main">
                <div style={{ border: "1px solid black" }} >
                    <OurValuesMenu
                        allOurValues={allOurValues}
                    />
                </div>

            </div>
            <div className="card-bg bg-cornflower-blue w-3/12 mx-auto">
                <span className="title text-md block">Do you want to grow with us?</span>
                <AnchorLink className="btn btn-black mt-4" to={"/#jobs-table"} >See open processes</AnchorLink>
            </div>
        </div>
    )
}