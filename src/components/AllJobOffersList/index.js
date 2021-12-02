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


    const jobOfferDetails = clickedDepartment
        ? data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.department === clickedDepartment)
        : data.allMarkdownRemark.edges;





    function allRoles() {
        setClickedDepartment(null)
    }

<<<<<<< HEAD
=======
    const handlePositionForm = () => {
        setFormVisivbility(!formVisibility)
    }

    console.log("showNotifySubmit:--->", showNotifySubmit);
>>>>>>> 6b7dab01035579b99265bef59001a2d4f8dca507

    return (
        <div>
            {showNotifySubmit === true ?
                <div className="relative z-10">
                    <div className="relative z-8">

                        <div className="flex mb-3">
                            <button
                                style={{
                                    backgroundColor: clickedDepartment ? "" : "#141414",
                                    color: clickedDepartment ? "" : "#f0f0f0"

                                }}
                                className="text-xs py-1 px-3 border border-black dark:border-white rounded-xl mr-1"
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
                                                    <div className="flex justify-between items-center"  >
                                                        <div>{detail.node.frontmatter.title}</div>
                                                        <span className="pill">{detail.node.frontmatter.department}</span>
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
                        {
<<<<<<< HEAD
                            jobOfferDetails.map((detail, index) => {
                                return (
                                    <Link key={index} to={detail.node.fields.slug} >
                                        <div className="card border border-black dark:border-white">
                                            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center"  >
                                                <div>{detail.node.frontmatter.title}</div>
                                                <span className="pill mt-2 xl:mt-0">{detail.node.frontmatter.department}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
=======
                            showNotifySubmit === true ?
                                "" :
                                <button className="btn btn-white" onClick={() => setShowNotifySubmit(false)}>Close</button>
>>>>>>> 6b7dab01035579b99265bef59001a2d4f8dca507
                        }
                    </div>

                    <div>
                        <div>
                            <div onClick={handlePositionForm} >
                                <NotifyMeButton showNotifySubmit={showNotifySubmit} setShowNotifySubmit={setShowNotifySubmit} />
                            </div>
                        </div>
                    </div>


                </div>


<<<<<<< HEAD
            <NotifyMeButton />
=======
                :


                <div className="relative z-10">
                    <div className="relative z-8">

                        <div className="flex mb-3">
                            <button
                                style={{
                                    backgroundColor: clickedDepartment ? "" : "#141414",
                                    color: clickedDepartment ? "" : "#f0f0f0"

                                }}
                                className="text-xs py-1 px-3 border border-black dark:border-white rounded-xl mr-1"
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
                                                    <div className="flex justify-between items-center"  >
                                                        <div>{detail.node.frontmatter.title}</div>
                                                        <span className="pill">{detail.node.frontmatter.department}</span>
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
                        <div onClick={handlePositionForm} >
                            <NotifyMeButton showNotifySubmit={showNotifySubmit} setShowNotifySubmit={setShowNotifySubmit} />
                        </div>
                    </div>

>>>>>>> 6b7dab01035579b99265bef59001a2d4f8dca507

                </div>
            }

        </div>

    )
}





