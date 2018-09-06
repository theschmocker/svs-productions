import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Button = styled.button`
  font-size: 0.9rem;
  cursor: pointer;
  height: 2.5rem;
  width: 10rem;
  color: ${props =>
    props.primary
      ? 'rgba(255,255,255, 0.75)'
      : lighten(0.3, props.theme.colors.accent)};
  background: ${props =>
    props.primary ? props.theme.colors.accent : 'transparent'};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 3px;
  margin-right: 1rem;
  letter-spacing: 0.07rem;
  text-transform: uppercase;

  &:hover {
    background: ${props =>
      props.primary
        ? lighten(0.05, props.theme.colors.accent)
        : 'rgba(255,255,255,0.05)'};
    border: 2px solid ${props => lighten(0.05, props.theme.colors.accent)};
  }
`;

export default Button;
