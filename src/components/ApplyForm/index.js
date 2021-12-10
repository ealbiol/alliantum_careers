import * as React from "react"
import GithubLogo from "../../images/apply-form-photos/github-logo.svg"
import GithubLogoWhite from "../../images/apply-form-photos/github-logo-white.svg"
import useTheme from "../../hooks/useTheme";


export function ApplyForm({ jobDepartment }) {

    const theme = useTheme();



    return (

        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="thank-you-for-applying/" className="mt-6 text-black"  >
            <input type="hidden" name="form-name" value="contact" />

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
                        {
                            theme === "dark" ?
                                <GithubLogoWhite />
                                :
                                <GithubLogo />

                        }
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