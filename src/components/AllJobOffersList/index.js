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


    return (
        <div>
            <div>

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


            <NotifyMeButton />

        </div>
    )
}





