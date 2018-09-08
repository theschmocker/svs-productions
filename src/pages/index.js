import React from 'react';
import Link from 'gatsby-link';

import LandingHero, {
  Container,
  Heading,
  SubHeading,
} from '../components/LandingHero';
import Button from '../components/Button';
import HeaderVideo from '../components/HeaderVideo';
import bg from '../../static/svs2.mp4';

const IndexPage = () => (
  <LandingHero>
    <HeaderVideo>
      <source src={bg} type="video/mp4" />
    </HeaderVideo>
    <Container>
      <Heading>We do visual</Heading>
      <SubHeading>Need quality visuals for your business or event? We have you covered.</SubHeading>
      <Button primary>Hire us</Button>
      <Button>See work</Button>
    </Container>
  </LandingHero>
);

export default IndexPage;
