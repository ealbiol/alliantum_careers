import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { DepartmentsMenu } from "../DepartmentsMenu"
import { GetAllDepartments } from "../../data/data"
import { NotifyMeButton } from "../NotifyMeButton"


export function AllJobOffersList() {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(          filter: {fileAbsolutePath: {regex: "/content\/jobOffers/"}}
        ) {
          edges {
            node {
              frontmatter {
                date
                department
                description
                languageRequired1
                languageRequired2
                experience
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
  `)

    const [clickedDepartment, setClickedDepartment] = React.useState(null)
    // const [formVisibility, setFormVisivbility] = React.useState(false)
    const [showNotifySubmit, setShowNotifySubmit] = React.useState(false)
    const [submitMessage, setSubmitMessage] = React.useState(false)


    const jobOfferDetails = clickedDepartment
        ? data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.department === clickedDepartment)
        : data.allMarkdownRemark.edges;


    function allRoles() {
        setClickedDepartment(null)
    }

    // const handlePositionForm = () => {
    //     setFormVisivbility(!formVisibility)
    // }


    return (
        <div>
            {showNotifySubmit === true ?
                <div className="relative z-9">
                    <div className="relative z-8">

                        <div className="flex mb-3">
                            <button
                                aria-label="Departments Name"
                                style={{
                                    backgroundColor: clickedDepartment ? "" : "#141414",
                                    color: clickedDepartment ? "" : "#f0f0f0"

                                }}
                                className="text-xs py-1 px-3 border border-black dark:border-white rounded-xl mr-1 mb-2 self-start"
                                onClick={() => (allRoles())} >
                                All roles
                            </button>
                            <DepartmentsMenu
                                allDepartments={GetAllDepartments()}
                                clickedDep={clickedDepartment}
                                setClickedDep={setClickedDepartment}
                            />
                        </div>
                    </div>

                    {
                        jobOfferDetails.length ?
                            <div>
                                {
                                    jobOfferDetails.map((detail, index) => {
                                        return (
                                            <Link key={index} to={detail.node.fields.slug} >
                                                <div className="card border border-black dark:border-white">
                                                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center" >
                                                        <div>{detail.node.frontmatter.title}</div>
                                                        <span className="pill mt-2 xl:mt-0">{detail.node.frontmatter.department}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className="mb-3" >There are currently no job offers available for the {clickedDepartment} team.</div>
                    }
                    <div className="absolute rounded-lg p-2 lg:p-4 top-0 w-100 min-w-full bg-white dark:bg-black z-30">
                        <div>
                            {
                                showNotifySubmit === true ?
                                    "" :
                                    <button aria-label="Close Button" className="btn btn-white" onClick={() => setShowNotifySubmit(false)}>Close</button>
                            }
                        </div>

                        <div>
                            <NotifyMeButton showNotifySubmit={showNotifySubmit} setShowNotifySubmit={setShowNotifySubmit} submitMessage={submitMessage} setSubmitMessage={setSubmitMessage} />
                        </div>
                    </div>

                </div>


                :


                <div className="relative z-10">
                    <div className="relative z-8">

                        <div className="flex flex-col lg:flex-row lg:mb-3 ">
                            <button
                                style={{
                                    backgroundColor: clickedDepartment ? "" : "#141414",
                                    color: clickedDepartment ? "" : "#f0f0f0"

                                }}
                                aria-label="Clicked Department"
                                className="text-xs py-1 px-3 border border-black dark:border-white rounded-xl mr-1 mb-2 self-start"
                                onClick={() => (allRoles())} >
                                All roles
                            </button>
                            <DepartmentsMenu
                                allDepartments={GetAllDepartments()}
                                clickedDep={clickedDepartment}
                                setClickedDep={setClickedDepartment}
                            />
                        </div>
                    </div>

                    {
                        jobOfferDetails.length ?
                            <div>
                                {
                                    jobOfferDetails.map((detail, index) => {
                                        return (
                                            <Link key={index} to={detail.node.fields.slug} >
                                                <div className="card border border-black dark:border-white">
                                                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center" >
                                                        <div>{detail.node.frontmatter.title}</div>
                                                        <span className="pill mt-2 xl:mt-0">{detail.node.frontmatter.department}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className="mb-3" >Currently there are no job offers available for the {clickedDepartment} team.</div>
                    }


                    <div>
                        <NotifyMeButton showNotifySubmit={showNotifySubmit} setShowNotifySubmit={setShowNotifySubmit} submitMessage={submitMessage} setSubmitMessage={setSubmitMessage} />
                    </div>


                </div>
            }



        </div>

    )
}
