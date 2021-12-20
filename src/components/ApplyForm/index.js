import * as React from "react"
import GithubLogo from "../../images/apply-form-photos/github-logo.svg"
import GithubLogoWhite from "../../images/apply-form-photos/github-logo-white.svg"
import useTheme from "../../hooks/useTheme";


export function ApplyForm({ jobDepartment, jobTitle }) {

    const theme = useTheme();


    const [fileName, setFileName] = React.useState(false)
    const [fileStatus, setFileStatus] = React.useState(null)



    function handleFileInput(e) {
        setFileName(true)
        setFileStatus(e.target.value.split("\\").pop())
    }


    const item = React.useRef();

    function handleLabel(e) {
        e.preventDefault()
        item.current.click()
    }



    return (

        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you-for-applying/" className=""  >

            <input type="hidden" name="form-name" value="contact"></input>
            <input type="hidden" name="position" value={jobTitle} />

            <div className="flex mb-2 gap-2"  >
                <input type="text" name="Applicant Name" placeholder="Your name" className="flex-grow input" required />
                <input type="text" name="Applicant Last Name" placeholder="Your last name" className="flex-grow input" required />
            </div>
            <div className="flex mb-2">
                <textarea name="subject" id="subject" rows="5" placeholder="Tell us about your talents" className="flex-grow input" style={{ resize: "none" }} required />
            </div>
            <div className="flex mb-2 gap-2" >
                <input type="email" name="Applicant Email" placeholder="Your email" className="input" required />
                {
                    fileName === false ?
                        <label htmlFor="uploadCV" className="input-upload cursor-pointer flex flex-grow input" onClick={handleLabel} >Your CV</label>
                        :
                        <label htmlFor="uploadCV" className="input-upload input-upload--filled cursor-pointer flex flex-grow input" onClick={handleLabel} >
                            {fileStatus ?
                                fileStatus
                                :
                                "Your CV"}
                        </label>
                }
                <input ref={item} type="file" id="uploadCV" name="Applicant CV" placeholder="Your CV" className="flex-grow hidden" onChange={handleFileInput} />


            </div>
            <div className="flex mb-2">
                {jobDepartment === "Web Developer" || jobDepartment === "Odoo Developer" || jobDepartment === "Sys Admin" || jobDepartment === "IT" || jobDepartment === "Business System" || jobTitle === "Frontend Developer" ?
                    <div className="flex flex-grow relative input-icon items-center">
                        {
                            theme === "dark" ?
                                <GithubLogoWhite className="absolute" />
                                :
                                <GithubLogo className="absolute" />

                        }
                        <input type="url" name="Applicant URL" placeholder="Your Github profile" className="flex-grow input" />
                    </div>
                    :
                    <input type="url" name="Applicant URL" placeholder="Your portfolio / blog / web" className="flex-grow input" />
                }
            </div>
            <div className="flex" >
                <button type="submit" className="btn btn-primary flex-grow" >Apply for this job</button>
            </div>
        </form>


    )
}