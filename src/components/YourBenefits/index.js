import * as React from "react"
import { getAllBenefits } from "../../data/data"

export function YourBenefits() {

    const [benefits, setBenefits] = React.useState([])

    React.useEffect(() => {
        getAllBenefits().then((result) => {
            setBenefits(result)

        })
    }, [])

    return (
        <div style={{ border: "1px solid black" }} >
            <div>YOUR BENEFITS</div>
            <div>
                Do Business Digitalisation
                and New-era Marketing
                in an international company
            </div>
            {
                benefits.map((benefit, index) => {
                    return (
                        <div key={index} >
                            <div>{benefit?.title?.toUpperCase()}</div>
                            <div>{benefit?.content}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}