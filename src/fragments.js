import { graphql, useStaticQuery } from "gatsby";

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

export const allJobOffersList = useStaticQuery(graphql`
fragment allJobOffersList on allMarkdownRemark {
    nodes {
      frontmatter {
        title
        department
      }
    }
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }


`)