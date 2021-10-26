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

    return (
        <div>
            {officePhotos.map((officePhoto, index) => {
                return (
                    <OfficePhoto key={index} officePhoto={officePhoto} />
                )
            })}
        </div>

    )
}