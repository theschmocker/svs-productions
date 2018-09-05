import React from 'react';
import styled from 'styled-components';

const LandingHero = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, black, #7462BC 150%);
    opacity: 0.5;
    filter: blur(1px);
  }
`;

LandingHero.Heading = styled.h2`
  font-size: 5rem;
  font-weight: normal;
  margin: 1rem 0;
  padding: 0;
  text-transform: uppercase;
  @media (max-height: 400px) {
    font-size: 3.75rem;
  }
`;

LandingHero.SubHeading = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  padding-left: 5px;
  margin: 1rem 0;
`;

LandingHero.Container = styled.div`
  width: 600px;
  font-family: ${props => props.theme.fonts.primary};
  padding: 0 1rem;
`;

export default LandingHero;
