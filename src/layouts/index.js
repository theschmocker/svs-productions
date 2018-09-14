import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
import Footer from '../components/Footer';

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
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
      <div>{children()}</div>
      <Footer />
    </Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
