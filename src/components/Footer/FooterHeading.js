import styled from 'styled-components';
import { lighten } from 'polished';

const FooterHeading = styled.h1`
  font-size: 2.5rem;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: lighter;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.fg};
    &:hover {
      color: ${props => lighten(0.1, props.theme.colors.fg)};
    }
  }
`;

export default FooterHeading;
