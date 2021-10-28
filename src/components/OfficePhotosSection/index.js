import * as React from "react"
import { getAllOfficePhotos } from '../../data/data';
import { OfficePhoto } from '../OfficePhoto';
import { Parallax } from 'react-scroll-parallax';



export function OfficePhotos() {

    const [officePhotos, setOfficePhotos] = React.useState([])

    React.useEffect(() => {
        getAllOfficePhotos().then((result) => {
            setOfficePhotos(result)
            console.log("Result Office Photos:--->", result);

        })
    }, [])

    const firstLinePhotos = officePhotos.slice(0, 4)
    console.log("firstLinePhotos:---->", firstLinePhotos);
    const secondLinePhotos = officePhotos.slice(4, 8);

    return (
        <div>
            <Parallax x={[-300, 40]}>
                <div style={{ border: "2px dashed rebeccapurple" }} >
                    {
                        firstLinePhotos.map((officePhoto, index) => {
                            return (
                                <OfficePhoto key={index} officePhoto={officePhoto} />
                            )
                        })
                    }
                </div>
            </Parallax>

            <Parallax x={[300, -40]}>
                <div style={{ border: "2px dashed rebeccapurple" }}   >
                    {
                        secondLinePhotos.map((officePhoto, index) => {
                            return (
                                <OfficePhoto key={index} officePhoto={officePhoto} />
                            )
                        })
                    }
                </div>
            </Parallax>

        </div>

    )
}