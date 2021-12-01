import * as React from "react"
import { getAllOfficePhotos } from '../../data/data';
import { OfficePhoto } from '../OfficePhoto';
import { Parallax } from "react-parallax";



export function OfficePhotos() {

    const [officePhotos, setOfficePhotos] = React.useState([])

    React.useEffect(() => {
        getAllOfficePhotos().then((result) => {
            setOfficePhotos(result)

        })
    }, [])

    const firstLinePhotos = officePhotos.slice(0, 4).sort(function (a, b) { return 0.5 - Math.random() })
    const secondLinePhotos = officePhotos.slice(4, 8).sort(function (a, b) { return 0.5 - Math.random() });

    return (
        <div>
            <Parallax
                style={{
                    height: "20vh",
                }}
                renderLayer={(percentage) => (
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            left: `${percentage * 100}%`,
                            transform: "translate(-35%,-0%)",
                            width: 1500,
                        }} >
                        {
                            firstLinePhotos.map((officePhoto, index) => {
                                return (
                                    <div key={index} >
                                        <OfficePhoto key={index} officePhoto={officePhoto} />
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            >
            </Parallax>

            <Parallax
                style={{
                    height: "20vh",
                    // overflow: "visible",
                }}
                renderLayer={(percentage) => (
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            //Horizontal:
                            right: `${percentage * 100}%`,
                            // top: "50%",
                            //Vertical:
                            // left: "50%",
                            // bottom: `${percentage * 50}%`,
                            transform: "translate(-00%,-00%)",
                            width: 1500,
                            // height: 400,
                        }} >
                        {
                            secondLinePhotos.map((officePhoto, index) => {
                                return (
                                    <div key={index} >
                                        <OfficePhoto key={index} officePhoto={officePhoto} />
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            >
            </Parallax>

        </div>

    )
}