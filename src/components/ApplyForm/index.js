import * as React from "react"
// import { getAllApplyFormFields } from "../../data/data"
import GithubLogo from "../../images/apply-form-photos/github-logo.svg"

export function ApplyForm({ jobDepartment }) {

    // const [formFields, setFormFields] = React.useState([])

    // React.useEffect(() => {
    //     getAllApplyFormFields().then((result) => {
    //         setFormFields(result)

    //     })
    // }, [])


    return (

        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="thank-you-for-applying/" style={{ border: "1px solid lightGray" }} className="mt-6"  >
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
            <div className="flex mb-2"  >
                <input type="text" name="Applicant Name" placeholder="Your name" className="flex-grow" required />
                <input type="text" name="Applicant Last Name" placeholder="Your last name" className="flex-grow " required />
            </div>
            <div className="flex mb-2">
                <textarea name="subject" id="subject" rows="5" placeholder="Tell us about your talents" className="flex-grow" style={{ resize: "none" }} required />
            </div>
            <div className="flex mb-2" >
                <input type="email" name="Applicant Email" placeholder="Your email" className="flex-grow" required />
                <input type="file" name="Applicant CV" placeholder="Your CV" className="flex-grow" required />
            </div>
            <div className="flex mb-2">
                {jobDepartment === "Web Developer" || jobDepartment === "Odoo Developer" || jobDepartment === "Sys Admin" || jobDepartment === "IT" || jobDepartment === "Business System" ?
                    <span className="flex flex-grow">
                        <GithubLogo />
                        <input type="url" name="Applicant URL" placeholder="Your Github profile" className="flex-grow" />
                    </span>
                    :
                    <input type="url" name="Applicant URL" placeholder="Your portfolio / blog / web" className="flex-grow" />
                }
            </div>
            <div className="flex" >
                <button type="submit" className="btn btn-primary flex-grow" >Apply for this job</button>
            </div>
        </form>


    )
}