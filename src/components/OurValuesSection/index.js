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
                    <div className="xl:py-2" >
                        <div className="container-main">
                            <OurValuesMenu
                                allOurValues={allOurValues}
                            />
                            <div className="card-bg bg-bleach md:w-px-420 mx-auto mt-4 mb-6 relative z-10">
                                <span className="title text-black text-md block">Do you want to grow with us?</span>
                                <AnchorLink className="btn btn-black btn-full text-center mt-4" to={"/#jobs-table"} >See open processes</AnchorLink>
                            </div>
                        </div>

                    </div>
                </div>

                <CircleBlur zIndex={1} blur="140" color="#529DFC" top="66%" left="35%" size="600"
                    keyFrame={ /* BLUE */
                        ` 
                            0 % { transform: scale(1) }
                            100 % { transform: scale(0.77) }
                        `
                    }
                />

            </div>
        </div>
    )
}