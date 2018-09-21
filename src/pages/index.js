import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/index';

import LandingHero, {
  Container,
  Heading,
  SubHeading,
} from '../components/LandingHero';
import Button from '../components/Button';
import HeaderVideo from '../components/HeaderVideo';
import Services from '../components/Services';

import bg from '../../static/svs2.mp4';

const IndexPage = () => (
  <Layout>
    <LandingHero>
      <HeaderVideo>
        <source src={bg} type="video/mp4" />
      </HeaderVideo>
      <Container>
        <Heading>We do visual</Heading>
        <SubHeading>
          Need quality visuals for your business or event? We have you covered.
        </SubHeading>
        <Button primary>Hire us</Button>
        <Button>See work</Button>
      </Container>
    </LandingHero>
    <Services />
  </Layout>
);

export default IndexPage;
