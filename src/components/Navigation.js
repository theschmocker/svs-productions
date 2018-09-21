import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import NavLink from './NavLink';
import MenuButton from './MenuButton';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    menuIsOpen: false,
  };

  toggleMenu = () => {
    if (this.state.menuIsOpen) {
      return this.setState({ menuIsOpen: false });
    }

    this.setState({ menuIsOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuIsOpen: false });
  };

  render() {
    return (
      <StyledNav menuIsOpen={this.state.menuIsOpen}>
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
          to="/#services"
        >
          Services
        </NavLink>
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
          pageIsScrolled={this.state.pageIsScrolled}
        >
          Menu
        </MenuButton>
      </StyledNav>
    );
  }
}

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.fg};
  text-decoration: none;
  z-index: 100;
  visibility: hidden;
  min-height: 100vh;

  ${props =>
    props.menuIsOpen &&
    css`
      position: fixed;
      visibility: visible;
      flex-direction: column;
      background: ${props.theme.colors.bg};
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      margin: 0;
      opacity: 1;
    `};
`;

export default Navigation;
