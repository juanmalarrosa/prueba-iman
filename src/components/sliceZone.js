import React from 'react';
import Hero from './hero';
import CallToActionGrid from './callToActionGrid';

const SliceZone = ({body}) => {

      return (

            <div>

                  {body.map((bodyContent,i) => {
                        if(bodyContent.type === 'hero2'){

                              return (

                                    <Hero  
                                    backgroundImage={bodyContent.primary.background_image.url}
                                    title={bodyContent.primary.hero_title}
                                    content={bodyContent.primary.hero_content}
                                    key={i} />

                              )
                        }else if(bodyContent.type === 'call_to_action_grid' ){
                              
                            
                              return (

                                    <CallToActionGrid 
                                          key={i}
                                          callToActions={bodyContent.fields}
                                    />

                              )
                        }
                  }) }

            </div>

      )
}



export default SliceZone;