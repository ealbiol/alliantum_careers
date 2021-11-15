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

        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" style={{ border: "1px solid black" }} >
            <input type="hidden" name="form-name" value="contact" />
            {/* {
                formFields.map((field, index) => {
                    return (
                        <label key={index} >
                            <input type={field.type} name={field.name} placeholder={field.placeholder} required />
                        </label>
                    )
                })
            } */}
            <input type="text" name="Applicant Name" placeholder="Your name" required />
            <input type="text" name="Applicant Last Name" placeholder="Your last name" required />
            <textarea name="subject" id="subject" rows="5" placeholder="Tell us about your talents" required />
            <input type="email" name="Applicant Email" placeholder="Your email" required />
            <input type="file" name="Applicant CV" placeholder="Your CV" required />
            <button type="submit" >Apply for this job</button>
        </form>


    )
}