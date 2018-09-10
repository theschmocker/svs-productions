import React from 'react';
import styled from 'styled-components';

const SlantedContainer = styled.section`
  position: relative;
  width: 100%;
  margin-top: 100px;
  background: #eee;
  color: ${props => props.theme.colors.bg};
  box-sizing: border-box;

  &:before {
    display: block;
    position: absolute;
    top: -100px;
    content: '';
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23${'eee'}%3B' /%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100px;
    width: 100%;
  }
`;

export default SlantedContainer;
