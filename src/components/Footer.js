import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Footer = () => (
  <StyledFooter>
    <FooterHeading>
      <h1>SvS<em> Productions </em></h1>
    </FooterHeading>
    <FooterLinks>
      <FooterNav>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/#services">Services</Link>
      </FooterNav>
      <SocialIcons>
        <a href="#">🔥</a>
        <a href="#">🔥</a>
        <a href="#">🔥</a>
        <a href="#">🔥</a>
      </SocialIcons>
      <FooterSubheading>We do visual</FooterSubheading>
    </FooterLinks>
    <Copyright>&copy; 2018 SvS Productions. Designed &amp; Developed by Jacob Schmocker</Copyright>
  </StyledFooter>
)

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

const FooterLinks = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 5rem; 
  padding-top: 1rem;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-transform: uppercase;
    font-size: 1.25rem;
    padding: 0.25rem;
    display: block;
    text-decoration: none;
    color: ${props => props.theme.colors.fg};
  }
`;

const FooterSubheading = styled.h2`
  margin: 0;
  font-size: 1.75rem;
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
  margin: 1rem auto;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
    & > * {
      font-size: 1.5rem;
      padding: 5px;
      height: 1.5rem;
      width: 1.5rem;
      text-align: center;
      line-height: 1.5rem;
    }
`;

const StyledFooter = styled.footer`
  font-family: ${props => props.theme.fonts.primary};
  background: ${props => props.theme.colors.accent};
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 2rem;
  min-height: 500px;
`;

export default Footer;
