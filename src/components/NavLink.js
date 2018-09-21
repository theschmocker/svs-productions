import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  position: relative;
  padding: 1.1rem 0;
  margin: 0 1.1rem;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.fg};

  ${props =>
    props.menuIsOpen
      ? css`
          visibility: visible;
          font-size: 2rem;
          padding: 0.75rem 0;
        `
      : css`
          visibility: hidden;
        `};
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.colors.fg};
    transform: scaleX(0);
    transition: transform 0.1s ease;
  }

  &:hover:after {
    transform: scaleX(1);
    transition: transform 0.1s ease;
  }
`;

export default NavLink;
