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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    benefits.map((unite, index) => {
                        const icon = iconsInSVG.find(icon => icon.id === unite.id)
                        return (
                            <div className="flex" key={index}>
                                <div>{icon && icon.component}</div>
                                <div className="flex flex-col mb-1 pl-3">
                                    <div className="h-px-80 flex items-center">
                                        <h4 className="mb-0 text-electric-violet-600 w-4/12">{unite?.title?.toUpperCase()}</h4>
                                    </div>
                                    <div className="pr-6">{unite?.content}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}