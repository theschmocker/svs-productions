import React from 'react';
import styled, { css } from 'styled-components';

const MenuButton = styled.button`
  visibility: visible;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: none;
  height: 3rem;
  width: 2.5rem;
  color: transparent;
  background: none;
  border: none;

  outline: none !important;

  &:before, &:after {
    position: absolute;
    content: "";
    width: 100%;
    height 2px;
    background: ${props => props.theme.colors.fg};
    transition: transform 0.2s ease;
  }

  &:before {
    top: 1rem;
    left: 0;
  }

  &:after {
    bottom: 1rem;
    left: 0;
  }

  ${props => props.theme.media.phone`
  display: block;
  ${props.menuIsOpen &&
    css`
      &:before {
        transform: rotate(45deg) translateY(0.5rem);
      }

      &:after {
        transform: rotate(-45deg) translateY(-0.5rem);
      }
    `}
`}
`;

export default MenuButton;
