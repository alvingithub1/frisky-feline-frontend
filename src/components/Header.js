import React, { Component, useState } from 'react'
// import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import cat from '../assets/header-cat.png'

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-container">
      <Navbar {...args} className="navbar-expand">
        <NavbarBrand href="/" className="frisky-feline-header">Friskey Feline</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/catshow">Show</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/catnew">Edit</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><img src={cat} className="header-img"/></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header