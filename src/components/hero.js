import React from 'react';

import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const HeroWrapper = styled.section`

background: url('${props => props.backgroundImage}');
height: calc(100vh - 66px);
background-size: cover;

      div{

            max-width:800px;
            margin: 0 auto;

      }


`;

const Hero = ({ title, content, backgroundImage }) => {


      return (

            <HeroWrapper backgroundImage={backgroundImage}>

                  <div>
                        <RichText render={title} ></RichText>

                        <p>{content}</p>

                  </div>

            </HeroWrapper>

      )


}

export default Hero;