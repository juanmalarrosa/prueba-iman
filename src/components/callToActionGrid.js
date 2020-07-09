import React from 'react';

import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';



const CallToActionGrid = ({title,callToActions}) => {


      return (
            <>
            {callToActions.map((cta,i) => {

                  return (

                              <div key={i}>
                              
                              <RichText render={cta.item_title} />
                              <RichText render={cta.item_content} />
 
                              </div>
                        

                  )

            })}
            </>
      )


}

export default CallToActionGrid;