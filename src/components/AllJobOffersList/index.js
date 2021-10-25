import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { NotifyMeButton } from "../NotifyMeButton"
import { DepartmentsMenu } from "../DepartmentsMenu"
import { GetAllDepartments } from "../../data/data"

export function AllJobOffersList() {


    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                department
                description
                languageRequired1
                languageRequired2
                experience
                title
                minimumExperience
                languageRequired3
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
        <div>
            <div>
                <div>WHAT WE NEED RIGHT NOW</div>

                <button onClick={() => (allRoles())} >All roles</button>

                <div  >
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
                            <div key={index} style={{ border: "1px solid black" }} >
                                <Link to={detail.node.fields.slug} >
                                    <div>{detail.node.frontmatter.title}</div>
                                    <div>{detail.node.frontmatter.department}</div>
                                </Link>
                            </div>

                        )
                    })
                }
            </div>

            <NotifyMeButton
                style={{ border: "1px solid blue" }}
            />

        </div>
    )
}

