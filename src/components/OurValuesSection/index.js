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
        <div className="dark:bg-black" >
            <div className="container-main">
                <div>
                    <OurValuesMenu
                        allOurValues={allOurValues}
                    />
                </div>

            </div>
            <div className="card-bg mt-6 bg-cornflower-blue w-3/12 mx-auto">
                <span className="title text-white text-md block">Do you want to grow with us?</span>
                <AnchorLink className="btn btn-white mt-4" to={"/#jobs-table"} >See open processes</AnchorLink>
            </div>
        </div>
    )
}