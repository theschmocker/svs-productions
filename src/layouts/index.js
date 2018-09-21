import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import { ThemeProvider, injectGlobal, css } from 'styled-components';
import styledNormalize from 'styled-normalize';

import theme from '../styles/theme';

injectGlobal(
  styledNormalize,
  css`
    body {
      background: ${theme.colors.bg};
      color: ${theme.colors.fg};
    }
  `
);

import 'typeface-roboto';
import 'typeface-roboto-slab';

import Navigation from '../components/Navigation';
import SiteHeaderLink from '../components/SiteHeaderLink';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet
        title={'SvS Productions'}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[
          {
            rel: 'shortcut icon',
            type: 'image/png',
            href: '/favicon.ico',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Navigation />
      <SiteHeaderLink
        to="/"
      >
        <h1>SvS</h1>
      </SiteHeaderLink>
      <div>{children}</div>
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Layout;
