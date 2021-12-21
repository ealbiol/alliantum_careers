import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { AllJobOffersList } from "../components/AllJobOffersList/index"
import { YourBenefits } from "../components/YourBenefits/index"
import { GoogleMaps } from "../components/GoogleMaps"
import { OfficePhotos } from "../components/OfficePhotosSection"
import { AstronautSection } from "../components/AstronautSection"
import { TheTeam } from "../components/TheTeam"
import { OurValuesSection } from "../components/OurValuesSection"
import { WorkWithUs } from "../components/WorkWithUs"
import { CircleBlur } from "../components/CircleBlur"


function IndexPage() {

  const data = useStaticQuery(graphql`
  query {
      allImageSharp {
          nodes{
              ...employeesPhotos
          }
      }
      site {
        ...metadata
      }
    }
        
`)

  return (
    <Layout titlePage={data.site.siteMetadata?.mainPage} >


      <div>
        <Seo title="Alliantum Careers" />

        {/* ------------> Work With Us */}
        <div className="overflow-hidden marquee-wrapper">
          <WorkWithUs />
        </div>

        {/* ------------> Job Offers Table */}
        <div id="jobs-table" className="w-full">
          <div className="blurred-gradient-wrapper lg:h-halfscreen">
            <div className="blurred-gradient-container">
              <div className="blurred-gradient-content lg:absolute">
                <div className="w-container-md w-100 h-full pt-7 px-2 sm:px-4 md:px-6 xl:px-0">
                  <span className="pretitle text-black dark:text-white">What we need right now</span>
                  <AllJobOffersList className="relative z-4" id="/#jobs-table" />
                </div>
              </div>

              <CircleBlur zIndex={1} color="#F9B457"
                lg={{
                  blur: 140,
                  top: "50%",
                  left: "20%",
                  size: "500"
                }}
                sm={{
                  blur: 100,
                  top: "60%",
                  left: "60%",
                  size: "300"
                }}
                keyFrame={ /* ORANGE */
                  ` 
                  0% { transform: translate(0, 0) }
                  15% { transform: scale(0.9) }
                  30% { transform: translate(30px, -30px) }
                  45% { transform: translate(30px, 30px) }
                  60% { transform: scale(1.1) }
                  75% { transform: translate(30px, -30px) }
                  100% { transform: translate(-30px, 30px) }
                  `
                }
              />

              <CircleBlur zIndex={1} color="#8838F8"
                lg={{
                  blur: 160,
                  top: "24%",
                  left: "34%",
                  size: "800"
                }}
                sm={{
                  blur: 100,
                  top: "40%",
                  left: "20%",
                  size: "300"
                }}
                keyFrame={ /* PURPLE */
                  `
                  0% { transform: translate(0, 0) }
                  15% { transform: scale(1.1) }
                  30% { transform: translate(-30px, -30px) }
                  45% { transform: translate(30px, -30px) }
                  60% { transform: scale(0.9) }
                  75% { transform: translate(30px, 30px) }
                  100% { transform: translate(-30px, -30px) }
                  `
                }
              />

              <CircleBlur zIndex={1} color="#68B583"
                lg={{
                  blur: 160,
                  top: "30%",
                  left: "58%",
                  size: "600"
                }}
                sm={{
                  blur: 100,
                  top: "62%",
                  left: "2%",
                  size: "400"
                }}
                keyFrame={ /* GREEN */
                  `
                  0% { transform: translate(0, 0) }
                  15% { transform: scale(0.9) }
                  30% { transform: translate(-30px, 30px) }
                  45% { transform: translate(-30px, -30px) }
                  60% { transform: scale(1.1) }
                  75% { transform: translate(-30px, 30px) }
                  100% { transform: translate(30px, -30px) }
                  `
                }
              />

            </div>
          </div>

        </div>

        {/* ------------> Your Benefits */}
        <div id="your-benefits" >
          <div className="container mx-auto pt-6 mb-2">
            <span className="pretitle">Your benefits</span>
            <h3 className="title text-md xl:w-6/12">Work in an international company, with a happy team, in a great office</h3>
            <YourBenefits />
          </div>
        </div>

        {/* ------------> Office Presentation */}
        <div>
          <div className="container mx-auto mt-6 mb-2">
            <h3 className="title text-md xl:w-6/12">Your future office is modern, bright and equipped with the latest technological equipment</h3>
          </div>
          <OfficePhotos />
        </div>

        {/* ------------> World Map */}
        <div id="the-offices" >
          <div className="blurred-gradient-wrapper">
            <div className="blurred-gradient-container">
              <div className="blurred-gradient-content">
              </div>
              <div className="relative z-10">
                <div className="container mx-auto mt-6 mb-2">
                  <span className="pretitle">The office</span>
                  <h3 className="title text-md xl:w-6/12">German spirit. Spanish passion.</h3>
                </div>
                <GoogleMaps />
              </div>

              <CircleBlur blur="180" color="#D76166" top="60%" left="40%" size="500"
                keyFrame={ /* RED */
                  `
                  0% { transform: translate(0, 0) }
                  15% { transform: scale(0.9) }
                  30% { transform: translate(-30px, 30px) }
                  45% { transform: translate(-30px, -30px) }
                  60% { transform: scale(1.1) }
                  75% { transform: translate(-30px, 30px) }
                  100% { transform: translate(30px, -30px) }
                `
                }
              />

            </div>
          </div>
        </div>

        {/* ------------> The Team */}
        <div id="the-team" />
        <div>
          {/*
          <div className="container mx-auto mt-6 mb-2">
            
            <span className="pretitle">The team</span>
            <h3 className="title text-md w-6/12">We are characterised by our strong team structure and working environment</h3>
          </div>
          */}
          <TheTeam />
        </div>
        <div>
          <AstronautSection />
        </div>

        {/* ------------> Our Values */}
        {/* AnchorLink id in OurValuesMenu Component. */}
        <OurValuesSection />
      </div>


    </Layout >
  )

}

export default IndexPage
