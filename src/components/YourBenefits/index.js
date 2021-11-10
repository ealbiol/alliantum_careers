import * as React from "react"
import { getAllBenefits } from "../../data/data"
import Icon1 from "../../images/your-benefits-photos/icon1.svg"
import Icon2 from "../../images/your-benefits-photos/icon2.svg"
import Icon3 from "../../images/your-benefits-photos/icon3.svg"
import Icon4 from "../../images/your-benefits-photos/icon4.svg"
import Icon5 from "../../images/your-benefits-photos/icon5.svg"
import Icon6 from "../../images/your-benefits-photos/icon6.svg"


export function YourBenefits() {

    const [benefits, setBenefits] = React.useState([])

    React.useEffect(() => {
        getAllBenefits().then((result) => {
            setBenefits(result)

        })
    }, [])

    const iconsInSVG = [
        { id: 1, component: <Icon1 /> },
        { id: 2, component: <Icon2 /> },
        { id: 3, component: <Icon3 /> },
        { id: 4, component: <Icon4 /> },
        { id: 5, component: <Icon5 /> },
        { id: 6, component: <Icon6 /> },
    ];

    return (
        <div>
            <div>Do Business Digitalisation and New-era Marketing in an international company</div>
            <div>YOUR BENEFITS</div>
            {
                benefits.map((unite, index) => {
                    const icon = iconsInSVG.find(icon => icon.id === unite.id)
                    return (
                        <div key={index} >
                            <div>{icon && icon.component}</div>
                            <h4>{unite?.title?.toUpperCase()}</h4>
                            <div>{unite?.content}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}