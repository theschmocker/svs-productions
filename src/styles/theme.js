import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default {
  media,
  colors: {
    fg: '#ddd',
    bg: '#222',
    landingGradient:
      'linear-gradient(145.57deg, #000000 26.56%, #7462BC 93.88%);',
    accent: '#493B81',
  },
  fonts: {
    primary: 'Roboto',
    secondary: 'Roboto Slab',
  }
};
