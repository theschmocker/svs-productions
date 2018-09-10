import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import SlantedContainer from './SlantedContainer';
import { H2, H3, H4, OfferingHeading } from './ContentHeadings';
import Separator from './Separator';

const ServicesContainer = styled(SlantedContainer)`
  font-family: ${props => props.theme.fonts.secondary};
`;

const Inner = styled.div`
  padding: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.5;

  & > p {
    color: ${props => lighten(0.2, props.theme.colors.accent)};
    font-size: 1.5rem;
    ${props => props.theme.media.phone`
      font-size: 1.25rem;
      margin: 0;
    `}
  }

  ${props => props.theme.media.phone`
    padding: 3rem 1rem;
  `}
`;

const OfferingsContainer = styled.ul`
  font-size: 1.1rem;
  padding-left: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  ${props => props.theme.media.phone`
    grid-template-columns: 1fr;
    grid-gap: 0;
    font-size: 1rem;
  `}
`;

const Offering = styled.li``;

const Services = () => (
  <ServicesContainer>
    <Inner>
      <a id="services" />
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
      <Separator />
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
      <Separator />
    </Inner>
  </ServicesContainer>
);

export default Services;
