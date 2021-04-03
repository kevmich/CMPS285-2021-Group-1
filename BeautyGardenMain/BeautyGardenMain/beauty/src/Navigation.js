import React, { useState } from 'react';
import "./App.css"
import {
  Collapse,
  Container,
  Row,
  Col,
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

import OfferedServices from './OfferedServices';



const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div  className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" title="Go to the homepage">The Beauty Garden</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Home/" title="Go to the homepage">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Services" title="See what we offer">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About/" title="Learn about us">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact/" title="Contact us">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ListPage/" title="View all inquiries">Contact List</NavLink>
            </NavItem>
            <NavItem></NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Meet The team
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Name1
                </DropdownItem>
                <DropdownItem>
                  Name2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Coming soon!</NavbarText>
         
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;