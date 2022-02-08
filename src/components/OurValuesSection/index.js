import * as React from "react"
import { getAllOurValues } from "../../data/data"
import { OurValuesMenu } from "../OurValuesMenu"
import { AnchorLink } from "gatsby-plugin-anchor-links"


export function OurValuesSection() {

    const [allOurValues, setAllOurValues] = React.useState([])

    React.useEffect(() => {
        getAllOurValues().then((result) => {
            setAllOurValues(result)
        })
    }, [])

    return (

        <div className="blurred-gradient-wrapper">
            <div className="blurred-gradient-container">
                <div className="blurred-gradient-content relative">
                    <div className="xl:py-2" >
                        <div className="container-main">
                            <div className="trianglesWrapper">
                                <div className="triangle triangle-lg triangleColor-general-2"
                                    style={{
                                        top: 600,
                                        left: "24%",
                                        transform: "rotate(60deg)",
                                        animationDuration: "38s"
                                    }}>
                                </div>
                                <div className="triangle triangle-lg triangleColor-general-1"
                                    style={{
                                        top: 700,
                                        left: "42%",
                                        transform: "rotate(20deg)",
                                        animationDuration: "50s"
                                    }}>
                                </div>
                            </div>
                            <OurValuesMenu
                                allOurValues={allOurValues}
                            />
                            <div className="card-bg bg-bleach md:w-px-420 mx-auto mt-4 mb-6 relative z-10">
                                <span className="title text-black text-md block">Do you want to grow with us?</span>
                                <AnchorLink className="btn bg-purple btn-full text-center text-white mt-4" to={"/#jobs-table"} >See open processes</AnchorLink>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}