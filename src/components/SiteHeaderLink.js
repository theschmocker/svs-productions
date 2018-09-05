import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import NavLink from './NavLink';

const SiteHeaderLink = styled(NavLink)`
  padding-top: 1rem;
  text-transform: none;
  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: lighter;
  }
  &:hover {
    color: #fff;

    &:after {
      display: none;
    }
  }

  ${props => props.theme.media.phone`
    visibility: visible;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 1rem;
    top: 1rem;
  `};
`;

export default SiteHeaderLink;
