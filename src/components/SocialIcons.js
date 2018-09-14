import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { lighten, darken } from 'polished';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = () => (
  <SocialIconsContainer>
    <a href="#" aria-label="SvS Productions on YouTube">
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="#" aria-label="SvS Productions on Instagram">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="#" aria-label="SvS Productions on Twitter">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="#" aria-label="SvS Productions on Facebook">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
  </SocialIconsContainer>
);

const SocialIconsContainer = styled.div`
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

    &:hover {
      color: ${props => lighten(0.1, props.theme.colors.fg)};
    }

    padding: 5px;
    height: 2rem;
    width: 2rem;
    text-align: center;
    line-height: 2rem;
  }
`;

export default SocialIcons;
