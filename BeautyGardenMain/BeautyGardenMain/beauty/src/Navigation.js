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
import "./Navigation.css"
import Button from './Button'
import SocialButtons from "./Components/SocialButtons";

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
              <NavLink href="/" title="Go to the homepage">Home</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>

                <DropdownItem>
                <NavLink href="/lash-extensions" title="See what we offer">Lash Extensions</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink href="/teeth-treatment" title="See what we offer">Teeth Treatments</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink href="/lip-filler" title="See what we offer">Needle Free Lip Fillers</NavLink>
                </DropdownItem>
               
                <DropdownItem>
                <NavLink href="/fat-dissolve" title="See what we offer">Needle Free Fat Dissolve</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink href="/face-and-wax" title="See what we offer">Facials and Waxing</NavLink>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          
            <NavItem>
              <NavLink href="/about" title="Learn about us">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/contact-us" title="Contact us">Contact</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/contact-list" title="View all inquiries">Contact List</NavLink>
            </NavItem>

          </Nav>
          <SocialButtons />
          <NavbarText>
              <NavLink href="/login" title="Login as admin"><Button /></NavLink>
          </NavbarText>
                  
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;