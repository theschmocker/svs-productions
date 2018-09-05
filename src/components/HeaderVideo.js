import React from 'react';
import styled from 'styled-components';

const HeaderVideo = styled.video.attrs({
  preload: true,
  autoPlay: true,
  loop: true,
  muted: true,
})`
  opacity: 0.2;
  position: fixed;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  left: 50%;
  transform: translateX(-50%);
`;

export default HeaderVideo;
