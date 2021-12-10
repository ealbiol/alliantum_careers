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
                                                        <div className="pr-6 sm:pr-4 md:pr-6">{unite?.content}</div>
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
            }



        </div>

    )
}