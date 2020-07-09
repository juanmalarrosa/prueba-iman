
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from 'styled-components';


//Lo que sigue despues del punto es un elemento de html
const MainWrapper = styled.main`
  margin: 0 auto;

`

const Header = styled.header`
  display:flex;
  background:black;
  height:66px;
  padding:0 16px;
  box-sizing:border-box;
`;

const NavLinks = styled.div`
  margin-left:auto;
  display:flex;
`;

const NavLink = styled.div`
  margin: auto 0;

  a{
    color:white;
    padding:0 16px;
    text-decoration:none;
    font-size:bold;
    font-size:15px;

    &:hover{
      color:red;
    }
  }

`;


const navigationQuery = graphql`

{
  prismic {
    allNavigations {
      edges {
        node {
          navigationLinks {
            link {
              _linkType
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
            label
          }
        }
      }
    }
  }
}


`;

const Layout = ({ children }) => {

  //Static query porque es un elemento unico  
  return (
    <>

      <Header>
        <StaticQuery

          query={navigationQuery}
          render={(data) => {

            return (
              <>
               
                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigationLinks.map((link) => {

                    return (

                      <NavLink key={link.link._meta.uid}>
                        <Link to={`/${link.link._meta.uid}`}>
                          {link.label}
                        </Link>
                      </NavLink>

                    )

                  }
                  )}
                </NavLinks>
              </>
            )


          }}
        />
      </Header>

      <MainWrapper>{children}</MainWrapper>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
