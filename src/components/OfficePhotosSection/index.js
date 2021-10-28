import * as React from "react"
import { getAllOfficePhotos } from '../../data/data';
import { OfficePhoto } from '../OfficePhoto';

export function OfficePhotos() {

    const [officePhotos, setOfficePhotos] = React.useState([])

    React.useEffect(() => {
        getAllOfficePhotos().then((result) => {
            setOfficePhotos(result)
            console.log("Result Office Photos:--->", result);

        })
    }, [])

    const first4photos = officePhotos.slice(0, 4)
    console.log("first4Photos:---->", first4photos);
    const last4photos = officePhotos.slice(4, 8)

    return (
        <div>
            <div style={{ border: "2px dashed rebeccapurple" }} >
                {
                    first4photos.map((officePhoto, index) => {
                        return (
                            <OfficePhoto key={index} officePhoto={officePhoto} />
                        )
                    })
                }
            </div>
            <div style={{ border: "2px dashed rebeccapurple" }}   >
                {
                    last4photos.map((officePhoto, index) => {
                        return (
                            <OfficePhoto key={index} officePhoto={officePhoto} />
                        )
                    })
                }
            </div>
        </div>

    )
}