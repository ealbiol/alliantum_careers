import * as React from "react"
import Select from 'react-select'
import { allDepartmentsReactSelect } from "../../data/data"
import IconBell from "../../images/notify-me-photos/Icon1.svg"

export function NotifyMeButtonReactSelect() {



    const [userEmail, setUserEmail] = React.useState("")
    const [userDepartment, setUserDepartment] = React.useState([0])
    const [showNotifySubmit, setShowNotifySubmit] = React.useState(false)


    const URL = "https://api.sendinblue.com/v3/contacts"


    function handleUserEmail(e) {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": process.env.GATSBY_SENDINBLUE_API_KEY,
            },
            body: JSON.stringify({ "email": userEmail, "listIds": userDepartment })

        };

        fetch(URL, options)
            .then(response => response.json())
            .then(data => console.log("Data:--->", data))
            .catch(err => console.error(err));

        console.log(options);

    }


    const handleBoolean = () => setShowNotifySubmit(!showNotifySubmit)

    const options = allDepartmentsReactSelect

    function handleChangeDepartment(e) {
        console.log("e.target.value:--->", e);
        setUserDepartment(e.map(department => department.id))
    }

    console.log("userDepartment:--->", userDepartment);

    return (
        <div>
            <button
                className="btn btn-outline btn-icon"
                onClick={handleBoolean}
            >
                <span><IconBell /></span>
                <span> Notify me on new jobs</span>
            </button>

            {showNotifySubmit &&

                <form onSubmit={handleUserEmail} style={{ border: "2px solid rebeccapurple" }} >
                    <label>Your email:{" "}</label>
                    <input
                        type="email"
                        name="Notify Me"
                        placeholder="email"
                        onChange={(e) => setUserEmail(e.currentTarget.value)}
                        required
                    />
                    <div >Departments:</div>
                    <Select
                        defaultValue={[allDepartmentsReactSelect[0]]}
                        isMulti
                        name="positions"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleChangeDepartment}
                    />


                    {
                        userDepartment.length > 0 ?
                            <button type="submit" style={{ color: `green` }} >
                                <span><IconBell /></span>
                                <span>Submit</span>
                            </button>
                            :
                            <button type="submit" style={{ color: `gray` }} disabled>
                                <span><IconBell /></span>
                                <span>Submit</span>
                            </button>
                    }

                    {/* {userDepartment &&
                        <button type="submit" style={{ color: `green` }} >
                            <span><IconBell /></span>
                            <span>Submit</span>
                        </button>
                    }

                    {userDepartment.length === 0 &&
                        <button type="submit" style={{ color: `gray` }} disabled>
                            <span><IconBell /></span>
                            <span>Submit</span>
                        </button>
                    } */}

                </form>

            }

        </div>
    )
}