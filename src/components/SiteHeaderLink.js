import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import NavLink from './NavLink';
import Link from 'gatsby-link';

const SiteHeaderLink = styled(Link)`
  position: absolute;
  z-index: 99;
  top: 1.5rem;
  left: 1.5rem;
  text-transform: none;
  color: ${({ theme }) => theme.colors.fg};
  text-decoration: none;
  h1 {
    font-family: ${props => props.theme.fonts.primary};
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
`;

export default SiteHeaderLink;
