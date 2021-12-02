import * as React from "react"
import { getAllOurValues } from "../../data/data"
import { OurValuesMenu } from "../OurValuesMenu"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { CircleBlur } from "../CircleBlur/index"


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
                    <div className="my-7" >
                        <div className="container-main">
                            <div>
                                <OurValuesMenu
                                    allOurValues={allOurValues}
                                />
                            </div>
                        </div>
                        <div className="card-bg bg-bleach w-10/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 xxl:w-3/12 mx-auto mt-4 mb-6 relative z-10">
                            <span className="title text-black text-md block">Do you want to grow with us?</span>
                            <AnchorLink className="btn btn-black btn-full text-center mt-4" to={"/#jobs-table"} >See open processes</AnchorLink>
                        </div>
                    </div>
                </div>

                <CircleBlur zIndex={1} blur="140" color="#529DFC" top="66%" left="35%" size="600"
                    keyFrame={ /* BLUE */
                        ` 
                            0 % { transform: translate(0, 0) }
                            33 % { transform: scale(0.77) }
                            66 % { transform: translate(20px, 40px) }
                            100 % { transform: translate(30px, 40px) }
                        `
                    }
                />

            </div>
        </div>
    )
}