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
            <div>
                <OurValuesMenu
                    allOurValues={allOurValues}
                />
            </div>
            <div>
                <div>Do you want to grow with us?</div>
                <AnchorLink to={"/#jobs-table"} >See open processes</AnchorLink>
            </div>
        </div>
    )
}