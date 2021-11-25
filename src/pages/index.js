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
import styled, { css, keyframes } from 'styled-components'


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


  const spin = keyframes`
    0%    {  transform: translate(0, 0) }
  33%   {  transform: scale(0.77) }
  66%   {  transform: translate(20px, 10px) }
  100%  {  transform: translate(40px, 20px) }
`;


  const animation = css`
    animation: ${spin} linear infinite alternate 6s;
  `

  return (
    <Layout titlePage={data.site.siteMetadata?.mainPage} >

      <div>
        <Seo title="Home" />

        {/* ------------> Work With Us */}
        <div className="overflow-hidden">
          <WorkWithUs />
        </div>

        {/* ------------> Job Offers Table */}
        <div id="jobs-table" className="w-full">
          <div class="blurred-gradient-wrapper h-screen">
            <div class="blurred-gradient-container">
              <div class="blurred-gradient-content">
                <div class="">
                  <span className="pretitle text-loblolly-600">What we need right now</span>
                  <h3 className="title text-md w-7/12">We do Business Digitalisation and New-era Marketing</h3>
                  <AllJobOffersList />
                </div>
              </div>

              <CircleBlur blur="50" color="yellow" top="50%" left="50%" size="300" animationName="animation3"
                keyFrame={{
                  "0%": { transform: "translate(0, 0)" },
                  "33%": { transform: "scale(0.77)" },
                  "66%": { transform: "translate(20px, 10px)" },
                  "100%": { transform: "translate(40px, 20px)" },
                }}
                animation={spin}
              />

            </div>
          </div>
        </div>

        {/* ------------> Your Benefits */}
        <div className="container mx-auto my-6">
          <span className="pretitle text-electric-violet">Your benefits</span>
          <h3 className="title text-md w-6/12">Work in an international company, with a happy team, in a great office</h3>
          <div id="your-benefits">
            <YourBenefits />
          </div>
        </div>

        {/* ------------> Office Presentation */}
        <div>
          <div className="container mx-auto mt-6 mb-2">
            <h3 className="title text-md w-6/12">Your future office is modern, bright and equipped with the latest technological equipment</h3>
          </div>
          <OfficePhotos />
        </div>

        {/* ------------> World Map */}
        <div id="the-offices">
          <div className="container mx-auto mt-6 mb-2">
            <span className="pretitle">The office</span>
            <h3 className="title text-md w-6/12">German spirit. Spanish passion.</h3>
          </div>
          <GoogleMaps />
        </div>

        {/* ------------> The Team */}
        <div>
          <div className="container mx-auto mt-6 mb-2">
            <span className="pretitle">The team</span>
            <h3 className="title text-md w-6/12">We are characterised by our strong team structure and working environment</h3>
          </div>
          <TheTeam />
        </div>

        <div>
          <AstronautSection />
        </div>

        {/* ------------> Our Values */}
        <div id="our-values" className="bg-loblolly-400 py-6" >
          <OurValuesSection />
        </div>
      </div>


    </Layout>
  )

}

export default IndexPage
