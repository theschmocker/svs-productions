import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Separator = styled.div`
  width: 100%;
  height: 5px;
  background ${props => lighten(0.5, props.theme.colors.accent)};
  border-radius: 3px;
  margin: 6rem auto;
`;

export default Separator;
