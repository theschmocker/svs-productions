import React from 'react';
import styled, { css } from 'styled-components';

const MenuButton = styled.button`
  visibility: visible;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  height: 50px;
  width: 2.5rem;
  color: transparent;
  background: none;
  border: none;

  outline: none !important;

  &:before, &:after {
    display: block;
    position: absolute;
    content: "";
    width: 100%;
    height 2px;
    background: ${props => props.theme.colors.fg};
    transition: transform 0.2s ease;
    transform-origin: center;
  }

  &:before {
    top: 17px;
    left: 0;
  }

  &:after {
    bottom: 17px;
    left: 0;
  }

  ${props =>
    props.menuIsOpen &&
    css`
      &:before {
        top: 18px;
        transform: rotate(45deg) translateY(0.5rem);
      }

      &:after {
        bottom: 18px;
        transform: rotate(-45deg) translateY(-0.5rem);
      }
    `}
`;

export default MenuButton;
