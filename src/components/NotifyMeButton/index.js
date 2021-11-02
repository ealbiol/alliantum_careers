import * as React from "react"
import { sendInBlueApiKey, departmentsLists } from "../../../credentials";
import { GetAllDepartments } from "../../data/data";

export function NotifyMeButton() {
    console.log("departmentsLists:--->", departmentsLists);
    const allDepartments = GetAllDepartments();

    const [userEmail, setUserEmail] = React.useState("")
    const [userDepartment, setUserDepartment] = React.useState("")
    const URL = "https://api.sendinblue.com/v3/contacts"

    function handleUserEmail(e) {
        e.preventDefault();
        console.log("User email:--->", userEmail);
        console.log("User department:--->", userDepartment);



        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": sendInBlueApiKey,
            },
            body: JSON.stringify({ "email": userEmail, "listIds": [4] })
        };



        fetch(URL, options)
            .then(response => response.json())
            .then(data => console.log("Added email:--->", data))
            .catch(err => console.error(err));

        console.log(options);
    }

    const allDepsWithoutManagement = allDepartments.filter(department => department !== "Management")
    allDepsWithoutManagement.sort().unshift("Select Department")
    console.log("Sorted Departments with 'Select':--->", allDepsWithoutManagement);

    console.log("user department:--->", userDepartment);

    // const finding = departmentsLists.find(department => userDepartment === Object.keys(department.name))
    // console.log("ggggggggg", finding);

    return (
        <div>
            {/* 1 */}
            <form onSubmit={handleUserEmail} >
                <input
                    type="email"
                    name="Notify Me"
                    placeholder="email"
                    onChange={(e) => setUserEmail(e.currentTarget.value)}
                    required
                />
                <button type="submit"   >
                    <span>(Bell Icon){" "}</span>
                    <span>Notify me on new jobs</span>
                </button>
            </form>


            {/* 2 */}
            <form onSubmit={handleUserEmail}>
                <input
                    type="email"
                    name="Notify Me"
                    placeholder="email"
                    onChange={(e) => setUserEmail(e.currentTarget.value)}
                    required
                />
                <label >Departments:</label>
                <select name="departments" id="departments" onChange={(e) => setUserDepartment(e.currentTarget.value)} >
                    {
                        allDepsWithoutManagement.map((department, index) => {
                            return (
                                <option
                                    key={index}
                                    value={department}
                                >
                                    {department}
                                </option>
                            )
                        })
                    }
                </select>
                <button type="submit">
                    <span>(Bell Icon){" "}</span>
                    <span>Notify me on new jobs</span>
                </button>
            </form>

        </div>
    )
}