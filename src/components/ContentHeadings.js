import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const baseHeadingStyles = css`
  font-family: ${props => props.theme.fonts.primary};
  text-transform: uppercase;
  margin: 1.5rem 0;
`;

export const H2 = styled.h2`
  display: inline-block;
  position: relative;
  ${baseHeadingStyles}
  font-size: 4rem;
  color: ${props => darken(0.1, props.theme.colors.accent)}

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    width: 80%;
    background: ${props => darken(0.1, props.theme.colors.accent)};
  }

  ${props => props.theme.media.phone`
    font-size: 2.25rem;
  `}
`;

export const H3 = styled.h3`
  ${baseHeadingStyles};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.accent};

  ${props => props.theme.media.phone`
    font-size: 1.875rem;
  `}
`;

export const H4 = styled.h4`
  ${baseHeadingStyles};
  font-size: 1.5rem;
  ${props => props.theme.media.phone`
    font-size: 1.25rem;
  `}
`;

export const OfferingHeading = styled(H4)`
  color: ${props => lighten(0.15, props.theme.colors.accent)};
`;
