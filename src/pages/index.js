import React from 'react';
import Link from 'gatsby-link';

import LandingHero, { Container, Heading, SubHeading } from '../components/LandingHero';
import Button from '../components/Button';

const IndexPage = () => (
  <LandingHero>
    <Container>
      <Heading>We do visual</Heading>
      <SubHeading>Welcome to your new Gatsby site.</SubHeading>
      <Button primary>Hire us</Button>
      <Button>See work</Button>
    </Container>
  </LandingHero>
);

export default IndexPage;
