import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SliceZone from "../components/sliceZone";

export const query = graphql`

 {
  prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero2 {
              type
              label
              primary {
                hero_content
                hero_title
                background_image
              }
            }
            ... on PRISMIC_HomepageBodyCall_to_action_grid {
              type
              label
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                item_content
                item_image
                item_title
              }
            }
          }
          
        }
      }
    }
  }
}



`;


const IndexPage = (props) => {

  console.log(props)

 return (
    <Layout>
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  )
}

export default IndexPage
