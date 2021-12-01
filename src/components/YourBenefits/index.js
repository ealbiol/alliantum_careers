import * as React from "react"
import { getAllBenefits } from "../../data/data"
import Icon1 from "../../images/your-benefits-photos/icon1.svg"
import Icon2 from "../../images/your-benefits-photos/icon2.svg"
import Icon3 from "../../images/your-benefits-photos/icon3.svg"
import Icon4 from "../../images/your-benefits-photos/icon4.svg"
import Icon5 from "../../images/your-benefits-photos/icon5.svg"
import Icon6 from "../../images/your-benefits-photos/icon6.svg"
import { CircleBlur } from "../CircleBlur/index"


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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5">
                {
                    benefits.map((unite, index) => {
                        const icon = iconsInSVG.find(icon => icon.id === unite.id)
                        return (
                            <div key={index} className="blurred-gradient-wrapper">
                                <div className="blurred-gradient-container">
                                    <div className="blurred-gradient-content relative">

                                        <div className="flex">
                                            <div>{icon && icon.component}</div>
                                            <div className="flex flex-col mb-1 pl-3">
                                                <div className="h-px-80 flex items-center">
                                                    <h4 className="mb-0 w-4/12">{unite?.title?.toUpperCase()}</h4>
                                                </div>
                                                <div className="pr-6">{unite?.content}</div>
                                            </div>
                                        </div>

                                    </div>
                                    <CircleBlur blur="40" color="#F9B457" top="20%" left="8%" size="70"
                                        keyFrame={ /* ORANGE */
                                            `    
                                        0%    {  transform: translate(0, 0) }
                                        33%   {  transform: scale(0.77) }
                                        66%   {  transform: translate(0px, 30px) }
                                        100%  {  transform: translate(26px, 40px) }
                                        `
                                        }
                                    />
                                    <CircleBlur blur="40" color="#8838F8" top="8%" left="16%" size="70"
                                        keyFrame={ /* PURPLE */
                                            `    
                                        0%    {  transform: translate(0, 0) }
                                        33%   {  transform: scale(0.88) }
                                        66%   {  transform: translate(14px, 22px) }
                                        100%  {  transform: translate(20px, 30px) }
                                        `
                                        }
                                    />
                                    <CircleBlur blur="40" color="#68B583" top="32%" left="30%" size="70"
                                        keyFrame={ /* GREEN */
                                            `    
                                        0%    {  transform: translate(0, 0) }
                                        33%   {  transform: scale(0.82) }
                                        66%   {  transform: translate(10px, 20px) }
                                        100%  {  transform: translate(40px, 10px) }
                                        `
                                        }
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}