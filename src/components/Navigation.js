import React, { Component, Fragment } from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';

import NavLink from './NavLink';
import SiteHeaderLink from './SiteHeaderLink';
import MenuButton from './MenuButton';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    menuIsOpen: false,
    fadeTimeout: true,
  };

  toggleMenu = () => {
    if (this.state.menuIsOpen) {
      this.fadeMenu();
      return this.setState({ menuIsOpen: false });
    }

    this.setState({ menuIsOpen: true, fadeTimeout: false });
  };

  closeMenu = () => {
    this.setState({ menuIsOpen: false });
    this.fadeMenu();
  };

  fadeMenu = () => {
    setTimeout(() => {
      this.setState({ fadeTimeout: true });
    }, 200);
  };

  render() {
    return (
      <StyledNav
        menuIsOpen={this.state.menuIsOpen}
        fadeTimeout={this.state.fadeTimeout}
      >
        <NavLink
          menuIsOpen={this.state.menuIsOpen}
          onClick={this.closeMenu}
          className="home-link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          menuIsOpen={this.state.menuIsOpen}
          onClick={this.closeMenu}
          to=""
        >
          Work
        </NavLink>
        <NavLink
          menuIsOpen={this.state.menuIsOpen}
          onClick={this.closeMenu}
          to=""
        >
          Services
        </NavLink>
        <SiteHeaderLink
          menuIsOpen={this.state.menuIsOpen}
          onClick={this.closeMenu}
          to="/"
        >
          <h1>SvS</h1>
        </SiteHeaderLink>
        <NavLink
          menuIsOpen={this.state.menuIsOpen}
          onClick={this.closeMenu}
          to=""
        >
          About
        </NavLink>
        <NavLink
          menuIsOpen={this.state.menuIsOpen}
          onClick={this.closeMenu}
          to=""
        >
          Contact
        </NavLink>
        <MenuButton
          menuIsOpen={this.state.menuIsOpen}
          onClick={this.toggleMenu}
        >
          Menu
        </MenuButton>
      </StyledNav>
    );
  }
}


const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.fg};
  text-decoration: none;
  transition: background 0.2s ease;
  z-index: 100;

  ${props => props.theme.media.phone`
    visibility: ${props => (props.fadeTimeout ? 'hidden' : 'visible')};
    min-height: 100vh;
  `} ${props =>
    props.menuIsOpen &&
    props.theme.media.phone`
    visibility: visible;
    flex-direction: column;
    background: ${props.theme.colors.bg};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    margin: 0;
    opacity: 1;
  `};
`;

export default Header;
