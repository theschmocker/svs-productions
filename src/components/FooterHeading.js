import React from 'react';
import styled from 'styled-components';

const FooterHeading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 5rem; 
  h1 {
    margin: 0;
    font-family: ${props => props.theme.fonts.primary};
    font-weight: lighter;
    font-size: 12rem;
    line-height: 1;
  }

  em {
    display: block;
    font-style: normal;
    font-size: 0.2em;
    font-family: ${props => props.theme.fonts.primary};
    letter-spacing: 2.75px;
    font-weight: normal;
    text-transform: uppercase;
  }
`

export default FooterHeading;

//<FooterHeading>
//<h1>SvS<em> Productions </em></h1>
//</FooterHeading>
