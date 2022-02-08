import * as React from "react"
import { getAllBenefitsWhite, getAllBenefitsBlack } from "../../data/data"

import Icon7 from "../../images/your-benefits-photos/icon-white-1.svg"
import Icon8 from "../../images/your-benefits-photos/icon-white-2.svg"
import Icon9 from "../../images/your-benefits-photos/icon-white-3.svg"
import Icon10 from "../../images/your-benefits-photos/icon-white-4.svg"
import Icon11 from "../../images/your-benefits-photos/icon-white-5.svg"
import Icon12 from "../../images/your-benefits-photos/icon-white-6.svg"
import Icon13 from "../../images/your-benefits-photos/icon-black-1.svg"
import Icon14 from "../../images/your-benefits-photos/icon-black-2.svg"
import Icon15 from "../../images/your-benefits-photos/icon-black-3.svg"
import Icon16 from "../../images/your-benefits-photos/icon-black-4.svg"
import Icon17 from "../../images/your-benefits-photos/icon-black-5.svg"
import Icon18 from "../../images/your-benefits-photos/icon-black-6.svg"


import useTheme from "../../hooks/useTheme";


export function YourBenefits() {

    const theme = useTheme();

    const [benefitsWhite, setBenefitsWhite] = React.useState([])
    const [benefitsBlack, setBenefitsBlack] = React.useState([])


    React.useEffect(() => {

        getAllBenefitsWhite().then((result) => {
            setBenefitsWhite(result)
        })

        getAllBenefitsBlack().then((result) => {
            setBenefitsBlack(result)
        })



    }, [])



    const iconsInSVGWhite = [
        { id: 7, component: <Icon7 /> },
        { id: 8, component: <Icon8 /> },
        { id: 9, component: <Icon9 /> },
        { id: 10, component: <Icon10 /> },
        { id: 11, component: <Icon11 /> },
        { id: 12, component: <Icon12 /> },
    ];

    const iconsInSVGBlack = [
        { id: 13, component: <Icon13 /> },
        { id: 14, component: <Icon14 /> },
        { id: 15, component: <Icon15 /> },
        { id: 16, component: <Icon16 /> },
        { id: 17, component: <Icon17 /> },
        { id: 18, component: <Icon18 /> },
    ];

    return (

        <div>
            <div className="trianglesWrapper">
                <div className="triangle triangle-md triangleColor-general-1"
                    style={{
                        top: -180,
                        right: "90%",
                        transform: "rotate(60deg)",
                        animationDuration: "38s"
                    }}>
                </div>
                <div className="triangle triangle-xl triangleColor-general-2"
                    style={{
                        top: 0,
                        left: "100%",
                        transform: "rotate(90deg)",
                        animationDuration: "42s"
                    }}>
                </div>
            </div>

            {
                theme === "dark" ?
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4 relative z-10" >
                        {
                            benefitsWhite.map((unite, index) => {
                                const icon = iconsInSVGWhite.find(icon => icon.id === unite.id)

                                return (

                                    <div className="flex flex-col xxl:flex-row">
                                        <div>{icon && icon.component}</div>
                                        <div className="flex flex-col mb-1 xxl:pl-3">
                                            <div className="h-px-80 flex items-center">
                                                <h4 className="mb-0 lg:w-4/12">{unite?.title?.toUpperCase()}</h4>
                                            </div>
                                            <div className="xl:pr-6">{unite?.content}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4 relative z-10" >
                        {
                            benefitsBlack.map((unite, index) => {
                                const icon = iconsInSVGBlack.find(icon => icon.id === unite.id)
                                return (

                                    <div className="flex flex-col xxl:flex-row">
                                        <div>{icon && icon.component}</div>
                                        <div className="flex flex-col mb-1 xxl:pl-3">
                                            <div className="h-px-80 flex items-center">
                                                <h4 className="mb-0 lg:w-4/12">{unite?.title?.toUpperCase()}</h4>
                                            </div>
                                            <div className="xl:pr-6">{unite?.content}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            }



        </div>

    )
}