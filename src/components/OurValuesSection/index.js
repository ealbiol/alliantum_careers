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
        <div className="bg-loblolly py-6">
            <div className="container-main">
                <OurValuesMenu
                    allOurValues={allOurValues}
                />
            </div>
            <div className="card-bg bg-cornflower-blue w-3/12 mx-auto">
                <span className="title text-md block">Do you want to grow with us?</span>
                <AnchorLink className="btn btn-black mt-4" to={"/#jobs-table"} >See open processes</AnchorLink>
            </div>
        </div>
    )
}