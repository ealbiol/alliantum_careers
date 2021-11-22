import * as React from "react"
import Select from 'react-select'
// import { GetAllDepartments } from "../../data/data";
import { allDepartmentsReactSelect } from "../../data/data"
import IconBell from "../../images/notify-me-photos/Icon1.svg"

export function NotifyMeButtonReactSelect() {

    // const departmentsLists = [
    //     { name: "IT", id: 4, description: "IT Department Description." },
    //     { name: "HR", id: 5, description: "HR Department Description." },
    //     { name: "Business System", id: 6, description: "Business System Department Description." },
    //     { name: "Digital Marketing", id: 7, description: "Digital Marketing Department Description." },
    //     { name: "All Positions", id: 10, description: "All Positions Description." },
    // ]


    // const allDepartments = GetAllDepartments();

    const [userEmail, setUserEmail] = React.useState("")
    const [userDepartment, setUserDepartment] = React.useState(null)
    const [showNotifySubmit, setShowNotifySubmit] = React.useState(false)


    const URL = "https://api.sendinblue.com/v3/contacts"


    function handleUserEmail(e) {
        e.preventDefault();
        // console.log("User email:--->", userEmail);
        // console.log("User department:--->", userDepartment);

        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": process.env.GATSBY_SENDINBLUE_API_KEY,
            },
            // body: JSON.stringify({ "email": userEmail })
            body: JSON.stringify({ "email": userEmail, "listIds": userDepartment })

        };

        fetch(URL, options)
            .then(response => response.json())
            .then(data => console.log("Data:--->", data))
            .catch(err => console.error(err));

        console.log(options);

    }


    // const matchingDepartment = departmentsLists.find(department => userDepartment === department.name)
    // const departmentId = [matchingDepartment?.id]

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
                        // defaultValue={[allDepartmentsReactSelect[2]]}
                        isMulti
                        name="positions"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleChangeDepartment}
                    />


                    <span>
                        {/* {
                            departmentsLists.find(department => userDepartment === department.name)?.description
                        } */}
                    </span>

                    {/* {userDepartment &&
                        <button type="submit" style={{ color: `gray` }} disabled>
                            <span><IconBell /></span>
                            <span>Submit</span>
                        </button>
                    } */}

                    {/* {userEmail && */}
                    <button type="submit" style={{ color: `green` }} >
                        <span><IconBell /></span>
                        <span>Submit</span>
                    </button>
                    {/* } */}


                </form>

            }

        </div>
    )
}