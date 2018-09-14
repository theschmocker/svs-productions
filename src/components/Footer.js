import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { darken } from 'polished';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <StyledFooter>
    <FooterLinks>
      <FooterHeading>SvS Productions</FooterHeading>
      <FooterNav>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/#services">Services</Link>
      </FooterNav>
      <SocialIcons>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </SocialIcons>
      <FooterSubheading>We do visual</FooterSubheading>
    </FooterLinks>
    <Copyright>
      &copy; {new Date().getFullYear()} SvS Productions. Designed &amp;
      Developed by Jacob Schmocker
    </Copyright>
  </StyledFooter>
);

const FooterLinks = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: normal;
    padding: 0.25rem;
    display: block;
    text-decoration: none;
    color: ${props => props.theme.colors.fg};
    opacity: 0.85;
  }
`;

const FooterHeading = styled.h1`
  font-size: 2.5rem;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: lighter;
`;

const FooterSubheading = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  opacity: 0.8;
`;

const Copyright = styled.section`
  text-align: center;
  opacity: 0.75;
  grid-column: span 2;
`;

const SocialIcons = styled.div`
  font-size: 1.5rem;
  margin: 1rem auto;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: ${props => props.theme.colors.fg}
    &:visited {
      color: ${props => props.theme.colors.fg}
    }
    padding: 5px;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
  }
`;

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
  grid-template-rows: auto 2rem;
  justify-content: center;
  min-height: 500px;
`;

export default Footer;
