import * as React from "react"
import { getAllApplyFormFields } from "../../data/data"

export function ApplyForm() {

    const [formFields, setFormFields] = React.useState([])

    React.useEffect(() => {
        getAllApplyFormFields().then((result) => {
            setFormFields(result)

        })
    }, [])

    return (

        <form style={{ border: "1px solid black" }} >
            {
                formFields.map((field, index) => {
                    return (
                        <label key={index} >
                            <input type={field.type} name={field.name} placeholder={field.placeholder} />
                        </label>
                    )
                })
            }
        </form>


    )
}