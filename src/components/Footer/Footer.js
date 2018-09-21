import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { lighten, darken } from 'polished';

import FooterContent from './FooterContent';
import FooterHeading from './FooterHeading';
import FooterNav from './FooterNav';
import SocialIcons from '../SocialIcons';
import FooterSubheading from './FooterSubheading';
import Copyright from './Copyright';

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <FooterHeading><Link to="/">SvS Productions</Link></FooterHeading>
      <FooterNav>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/#services">Services</Link>
      </FooterNav>
      <SocialIcons />
      <FooterSubheading>We do visual</FooterSubheading>
    </FooterContent>
    <Copyright>
      <span>&copy; {new Date().getFullYear()} SvS Productions. </span> 
      <span>Built by Jacob Schmocker</span>
    </Copyright>
  </StyledFooter>
);


const StyledFooter = styled.footer`
  font-family: ${props => props.theme.fonts.primary};
  background: linear-gradient(
    135deg,
    ${props => darken(0.2, props.theme.colors.accent)},
    #7462bc 150%
  );
  margin: 0;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto minmax(2rem, 4rem);
  justify-content: center;
  min-height: 500px;
`;

export default Footer;
