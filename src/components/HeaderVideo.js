import React from 'react';
import styled from 'styled-components';

const HeaderVideo = styled.video.attrs({
  preload: '',
  autoPlay: true,
  loop: true,
  muted: true,
})`
  opacity: 1;
  filter: blur(5px) grayscale(100);
  position: fixed;
  bottom: 0;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  left: 50%;
  transform: translateX(-50%);
  ${props => props.theme.media.phone`
    display: none;
  `}
`;

export default HeaderVideo;
