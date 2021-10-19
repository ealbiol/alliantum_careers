import { graphql } from "gatsby";

export const employeesPhotos = useStaticQuery(graphql`
fragment employeesPhotos on ImageSharp {
      
        fixed {
          originalName
        }
        gatsbyImageData
      }
    
      
`)


export const metadata = useStaticQuery(graphql`
fragment metadata on Site {
      siteMetadata {
        jobOffer
        mainPage
        theTeam
        title
      }
    }
      
`)