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


import { CircleBlur } from "../CircleBlur/index"
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

            {
                theme === "dark" ?
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4" >
                        {
                            benefitsWhite.map((unite, index) => {
                                const icon = iconsInSVGWhite.find(icon => icon.id === unite.id)

                                return (
                                    <div key={index} className="blurred-gradient-wrapper">
                                        <div className="blurred-gradient-container">
                                            <div className="blurred-gradient-content relative">

                                                <div className="flex flex-col xxl:flex-row">
                                                    <div>{icon && icon.component}</div>
                                                    <div className="flex flex-col mb-1 xxl:pl-3">
                                                        <div className="h-px-80 flex items-center">
                                                            <h4 className="mb-0 lg:w-4/12">{unite?.title?.toUpperCase()}</h4>
                                                        </div>
                                                        <div className="xl:pr-6">{unite?.content}</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <CircleBlur blur={unite.blur1} color={unite.color1} top={unite.top1} left={unite.left1} size={unite.size1}
                                                keyFrame={unite.keyFrame1} /* ORANGE */
                                            />
                                            <CircleBlur blur={unite.blur2} color={unite.color2} top={unite.top2} left={unite.left2} size={unite.size2}
                                                keyFrame={unite.keyFrame2} /* PURPLE */
                                            />
                                            <CircleBlur blur={unite.blur3} color={unite.color3} top={unite.top3} left={unite.left3} size={unite.size3}
                                                keyFrame={unite.keyFrame3} /* GREEN */
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4" >
                        {
                            benefitsBlack.map((unite, index) => {
                                const icon = iconsInSVGBlack.find(icon => icon.id === unite.id)
                                return (
                                    <div key={index} className="blurred-gradient-wrapper">
                                        <div className="blurred-gradient-container">
                                            <div className="blurred-gradient-content relative">

                                                <div className="flex flex-col xxl:flex-row">
                                                    <div>{icon && icon.component}</div>
                                                    <div className="flex flex-col mb-1 xxl:pl-3">
                                                        <div className="h-px-80 flex items-center">
                                                            <h4 className="mb-0 lg:w-4/12">{unite?.title?.toUpperCase()}</h4>
                                                        </div>
                                                        <div className="xl:pr-6">{unite?.content}</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <CircleBlur blur={unite.blur1} color={unite.color1} top={unite.top1} left={unite.left1} size={unite.size1}
                                                keyFrame={unite.keyFrame1} /* ORANGE */
                                            />
                                            <CircleBlur blur={unite.blur2} color={unite.color2} top={unite.top2} left={unite.left2} size={unite.size2}
                                                keyFrame={unite.keyFrame2} /* PURPLE */
                                            />
                                            <CircleBlur blur={unite.blur3} color={unite.color3} top={unite.top3} left={unite.left3} size={unite.size3}
                                                keyFrame={unite.keyFrame3} /* GREEN */
                                            />
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