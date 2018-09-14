import styled from 'styled-components';
import { lighten } from 'polished';

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: normal;
    padding: 0.25rem;
    display: block;
    text-decoration: none;
    color: ${props => props.theme.colors.fg};
    opacity: 0.85;

    &:hover {
      color: ${props => lighten(0.1, props.theme.colors.fg)};
    }
  }
`;

export default FooterNav;
