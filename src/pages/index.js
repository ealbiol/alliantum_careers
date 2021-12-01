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
        <div className="overflow-hidden">
          <WorkWithUs />
        </div>

        {/* ------------> Job Offers Table */}
        <div id="jobs-table" className="w-full">
          <div className="blurred-gradient-wrapper h-halfscreen">
            <div className="blurred-gradient-container">
              <div className="blurred-gradient-content absolute">
                <div className="w-container-md w-100">
                  <span className="pretitle text-loblolly-600">What we need right now</span>
                  <AllJobOffersList id="/#jobs-table" />
                </div>
              </div>

              <CircleBlur zIndex={1} blur="50" color="yellow" top="50%" left="50%" size="300"
                keyFrame={
                  `0 % { transform: translate(0, 0) }
                  33 % { transform: scale(0.77) }
                  66 % { transform: translate(10px, 20px) }
                  100 % { transform: translate(30px, 40px) }
                    `
                }
              />

              <CircleBlur zIndex={1} blur="160" color="#8838F8" top="18%" left="38%" size="800"
                keyFrame={ /* PURPLE */
                  `
                  0 % { transform: translate(0, 0) }
                  33 % { transform: scale(0.88) }
                  66 % { transform: translate(10px, 20px) }
                  100 % { transform: translate(30px, 40px) }
                    `
                }
              />

              <CircleBlur zIndex={1} blur="160" color="#68B583" top="30%" left="58%" size="600"
                keyFrame={ /* GREEN */
                  `
                  0 % { transform: translate(0, 0) }
                  33 % { transform: scale(0.82) }
                  66 % { transform: translate(10px, 20px) }
                  100 % { transform: translate(30px, 40px) }
                    `
                }
              />

            </div>
          </div>

        </div>

        {/* ------------> Your Benefits */}
        <div id="your-benefits" />
        <div className="container mx-auto my-6">
          <span className="pretitle">Your benefits</span>
          <h3 className="title text-md w-6/12">Work in an international company, with a happy team, in a great office</h3>
          <YourBenefits />
        </div>

        {/* ------------> Office Presentation */}
        <div>
          <div className="container mx-auto my-6 mb-2">
            <h3 className="title text-md w-6/12">Your future office is modern, bright and equipped with the latest technological equipment</h3>
          </div>
          <OfficePhotos />
        </div>

        {/* ------------> World Map */}
        <div id="the-offices" />

        <div className="blurred-gradient-wrapper h-halfscreen">
          <div className="blurred-gradient-container">
            <div className="blurred-gradient-content">
            </div>
            <div className="relative z-10">
              <div className="container mx-auto mt-6 mb-2">
                <span className="pretitle">The office</span>
                <h3 className="title text-md w-6/12">German spirit. Spanish passion.</h3>
              </div>
              <GoogleMaps />
            </div>

            <CircleBlur blur="180" color="#D76166" top="60%" left="40%" size="700"
              keyFrame={ /* RED */
                `
                0 % { transform: translate(0, 0) }
                33 % { transform: scale(0.82) }
                66 % { transform: translate(10px, 20px) }
                100 % { transform: translate(30px, 40px) }
                  `
              }
            />

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
        <div id="our-values" />
        <div>
          <OurValuesSection />
        </div>
      </div>


    </Layout>
  )

}

export default IndexPage
