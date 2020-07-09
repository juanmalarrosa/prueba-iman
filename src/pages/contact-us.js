import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';


export const query = graphql`


{
      prismic {
        allContacts {
          edges {
            node {
              form_fields {
                field_name
                required
                type
              }
            }
          }
        }
      }
}

    

`;


const Form = styled.div`
color:red

`;



const contactUs = (props) => {


      //en action va la pagina dnd se quiere redigirigr al usuario desp de completar el form
      return (

            <Layout>

            

                  <Form 
                  name="contact-us"
                  method="POST"
                  data-netlify="true"
                  action="/"
                  onSubmit={e=> e.preventDefault()}>


                        <input type="hidden" name="form-name" value="contact-us" />


                        {props.data.prismic.allContacts.edges[0].node.form_fields.map((field, i) => {

                              if (field.type === 'textarea') {
                                    return (

                                          <div key={i}>

                                                <textarea
                                                      required={field.required === 'required'}
                                                      placeholder={field.field_name}></textarea>

                                          </div>

                                    )

                              } else {

                                    return (

                                          <div key={i}>

                                                <input type={field.type }
                                                      required={field.required === 'required'}
                                                      placeholder={field.field_name} />

                                          </div>

                                    )


                              }


                        })}

                        <button type="submit">Enviar</button>

                  </Form>
            </Layout>

      )
}



export default contactUs;