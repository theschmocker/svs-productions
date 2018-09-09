import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import SlantedContainer from './SlantedContainer';
import { H2, H3, H4, OfferingHeading } from './ContentHeadings';

const ServicesContainer = styled(SlantedContainer)`
  font-family: ${props => props.theme.fonts.secondary};
`;

const Inner = styled.div`
  padding: 3rem 20rem;
  line-height: 1.5;

  & > p {
    color: ${props => lighten(0.2, props.theme.colors.accent)};
    text-align: center;
    font-size: 1.5rem;
  }
`;

const OfferingsContainer = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const Offering = styled.li``;

const Services = () => (
  <ServicesContainer>
    <Inner>
      <a name="services" />
      <H2>Services</H2>
      <H3>Video Production</H3>
      <p>
        Don’t miss a moment. Whether it’s your wedding, your child’s sporting
        event, or the next commercial for your business---we’ll help you capture
        it.
      </p>
      <OfferingsContainer>
        <Offering>
          <OfferingHeading>Writing</OfferingHeading>
          <p>
            Bacon ipsum dolor amet officia landjaeger andouille, sirloin ham
            hock esse bresaola ut frankfurter turkey quis. Aute reprehenderit
            turkey in, ex chuck eiusmod kevin ham hock excepteur tempor officia.
            Brisket meatball enim doner andouille corned beef eiusmod cillum
            bresaola consequat bacon non minim dolor. T-bone in do, tri-tip anim
            id eiusmod voluptate.
          </p>
        </Offering>
        <Offering>
          <OfferingHeading>Directing</OfferingHeading>
          <p>
            Bacon ipsum dolor amet officia landjaeger andouille, sirloin ham
            hock esse bresaola ut frankfurter turkey quis. Aute reprehenderit
            turkey in, ex chuck eiusmod kevin ham hock excepteur tempor officia.
            Brisket meatball enim doner andouille corned beef eiusmod cillum
            bresaola consequat bacon non minim dolor. T-bone in do, tri-tip anim
            id eiusmod voluptate.
          </p>
        </Offering>
        <Offering>
          <OfferingHeading>Editing</OfferingHeading>
          <p>
            Bacon ipsum dolor amet officia landjaeger andouille, sirloin ham
            hock esse bresaola ut frankfurter turkey quis. Aute reprehenderit
            turkey in, ex chuck eiusmod kevin ham hock excepteur tempor officia.
            Brisket meatball enim doner andouille corned beef eiusmod cillum
            bresaola consequat bacon non minim dolor. T-bone in do, tri-tip anim
            id eiusmod voluptate.
          </p>
        </Offering>
        <Offering>
          <OfferingHeading>Recording</OfferingHeading>
          <p>
            Bacon ipsum dolor amet officia landjaeger andouille, sirloin ham
            hock esse bresaola ut frankfurter turkey quis. Aute reprehenderit
            turkey in, ex chuck eiusmod kevin ham hock excepteur tempor officia.
            Brisket meatball enim doner andouille corned beef eiusmod cillum
            bresaola consequat bacon non minim dolor. T-bone in do, tri-tip anim
            id eiusmod voluptate.
          </p>
        </Offering>
      </OfferingsContainer>
      <H3>Photography</H3>
      <p />
      <p>
        Something about taking photos. And editing them. Words. Lorem ipsum
        dolor sit amet etc.
      </p>
      <OfferingsContainer>
        <Offering>
          <OfferingHeading>Capture</OfferingHeading>
          <p>
            Bacon ipsum dolor amet officia landjaeger andouille, sirloin ham
            hock esse bresaola ut frankfurter turkey quis. Aute reprehenderit
            turkey in, ex chuck eiusmod kevin ham hock excepteur tempor officia.
            Brisket meatball enim doner andouille corned beef eiusmod cillum
            bresaola consequat bacon non minim dolor. T-bone in do, tri-tip anim
            id eiusmod voluptate.
          </p>
        </Offering>
        <Offering>
          <OfferingHeading>Editing</OfferingHeading>
          <p>
            Bacon ipsum dolor amet officia landjaeger andouille, sirloin ham
            hock esse bresaola ut frankfurter turkey quis. Aute reprehenderit
            turkey in, ex chuck eiusmod kevin ham hock excepteur tempor officia.
            Brisket meatball enim doner andouille corned beef eiusmod cillum
            bresaola consequat bacon non minim dolor. T-bone in do, tri-tip anim
            id eiusmod voluptate.
          </p>
        </Offering>
        <Offering>
          <OfferingHeading>Staging</OfferingHeading>
          <p>
            Bacon ipsum dolor amet officia landjaeger andouille, sirloin ham
            hock esse bresaola ut frankfurter turkey quis. Aute reprehenderit
            turkey in, ex chuck eiusmod kevin ham hock excepteur tempor officia.
            Brisket meatball enim doner andouille corned beef eiusmod cillum
            bresaola consequat bacon non minim dolor. T-bone in do, tri-tip anim
            id eiusmod voluptate.
          </p>
        </Offering>
        <Offering>
          <OfferingHeading>Retouching</OfferingHeading>
          <p>
            Bacon ipsum dolor amet officia landjaeger andouille, sirloin ham
            hock esse bresaola ut frankfurter turkey quis. Aute reprehenderit
            turkey in, ex chuck eiusmod kevin ham hock excepteur tempor officia.
            Brisket meatball enim doner andouille corned beef eiusmod cillum
            bresaola consequat bacon non minim dolor. T-bone in do, tri-tip anim
            id eiusmod voluptate.
          </p>
        </Offering>
      </OfferingsContainer>
    </Inner>
  </ServicesContainer>
);

export default Services;
