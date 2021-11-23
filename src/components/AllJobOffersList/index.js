import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { DepartmentsMenu } from "../DepartmentsMenu"
import { GetAllDepartments } from "../../data/data"
import { NotifyMeButton } from "../NotifyMeButton"


export function AllJobOffersList() {


    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
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



    console.log("job offer details:--->", jobOfferDetails);

    function allRoles() {
        setClickedDepartment(null)
    }

    return (
        <div className="">
            <div>

                <div className="flex mb-3">
                    <button
                        style={{
                            backgroundColor: clickedDepartment ? "" : "#D7DCE1",
                            color: clickedDepartment ? "" : "black"

                        }}
                        className="text-xs py-1 px-3 border border-loblolly rounded-xl mr-1"
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

            <div>
                {
                    jobOfferDetails.map((detail, index) => {
                        return (
                            <div key={index} className="card">
                                <Link className="flex justify-between items-center" to={detail.node.fields.slug} >
                                    <div>{detail.node.frontmatter.title}</div>
                                    <span className="pill">{detail.node.frontmatter.department}</span>
                                </Link>
                            </div>

                        )
                    })
                }
            </div>

            <NotifyMeButton />

        </div>
    )
}

