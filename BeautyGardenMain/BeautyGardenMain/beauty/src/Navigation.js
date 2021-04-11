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
import Button from './loginButton'
import SocialButtons from "./Components/SocialButtons";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div  className="App">
      <Navbar className="navBar" color="light" light expand="md">
        <NavbarBrand href="/" title="Go to the homepage">The Beauty Garden</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink className="home" href="/" title="Go to the homepage">Home</NavLink>
            </NavItem>

            <UncontrolledDropdown className="services" nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>

                <DropdownItem>
                <NavLink className="servicesDrop" href="/lash-extensions" title="See what we offer">Lash Extensions</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink className="servicesDrop" href="/teeth-treatment" title="See what we offer">Teeth Treatments</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink className="servicesDrop" href="/lip-filler" title="See what we offer">Needle Free Lip Fillers</NavLink>
                </DropdownItem>
               
                <DropdownItem>
                <NavLink className="servicesDrop" href="/fat-dissolve" title="See what we offer">Needle Free Fat Dissolve</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink className="servicesDrop" href="/face-and-wax" title="See what we offer">Facials and Waxing</NavLink>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          
            <NavItem>
              <NavLink className="about" href="/about" title="Learn about us">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="contact" href="/contact-us" title="Contact us">Contact</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="contactList" href="/contact-list" title="View all inquiries">Contact List</NavLink>
            </NavItem>

          </Nav>
          <SocialButtons />
          <NavItem>
              <NavLink className="loginbutton" href="/login" title="Login"></NavLink>
            </NavItem>
                  
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;