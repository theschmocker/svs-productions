import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const baseHeadingStyles = css`
  font-family: ${props => props.theme.fonts.primary};
  text-transform: uppercase;
  text-align: center;
`;

export const H2 = styled.h2`
  ${baseHeadingStyles}
  font-size: 4rem;
`;

export const H3 = styled.h3`
  ${baseHeadingStyles}
  font-size: 2.5rem;
`;

export const H4 = styled.h4`
  ${baseHeadingStyles}
  font-size: 1.5rem;
`;

export const OfferingHeading = styled(H4)`
  color: ${props => lighten(0.15, props.theme.colors.accent)};
`;
