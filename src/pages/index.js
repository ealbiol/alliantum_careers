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
          <div className="lg:h-halfscreen w-container-md mx-auto">
            <div className="trianglesWrapper">
              <div className="triangle triangle-lg triangleColor-general-2"
                style={{
                  top: 300,
                  left: -120,
                  transform: "rotate(90deg)",
                  animationDuration: "42s"
                }}>
              </div>
              <div className="triangle triangle-sm triangleColor-general-3"
                style={{
                  top: 700,
                  left: 0,
                  transform: "rotate(120deg)",
                  animationDuration: "58s"
                }}>
              </div>
              <div className="triangle triangle-xl triangleColor-general-1"
                style={{
                  top: 200,
                  right: -120,
                  transform: "rotate(60deg)",
                  animationDuration: "38s"
                }}>
              </div>
            </div>

            <div className="w-100 h-full pt-7 px-2 sm:px-4 md:px-6 xl:px-0">

              <h2 className="pretitle text-black dark:text-white font-medium">What we need right now</h2>
              <AllJobOffersList className="relative z-4" id="/#jobs-table" />
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
          <div className="trianglesWrapper">
            <div className="triangle triangle-xl triangleColor-general-1"
              style={{
                top: 400,
                left: "40%",
                transform: "rotate(60deg)",
                animationDuration: "38s"
              }}>
            </div>
            <div className="triangle triangle-lg triangleColor-general-2"
              style={{
                top: 830,
                right: "50%",
                transform: "rotate(90deg)",
                animationDuration: "42s"
              }}>
            </div>
          </div>
          <div className="relative z-10">
            <div className="container mx-auto mt-6 mb-2">
              <span className="pretitle">The office</span>
              <h3 className="title text-md xl:w-6/12">German spirit. Spanish passion.</h3>
            </div>
            <GoogleMaps />
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
