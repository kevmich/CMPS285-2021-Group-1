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
import { Link } from 'react-router-dom';
import "./Navigation.css"


import SocialButtons from "./Buttons/SocialButtons";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div  className="App">
      <Navbar className="navBar" color="light" light expand="md">
        <NavbarBrand href="/" title="Go to the homepage">The Beauty Garden</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

            <NavItem className="homeBtn">
              <Link className="home" to="/" title="Go to the homepage">
                Home
              </Link>
            </NavItem>

            <UncontrolledDropdown className="services" nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>

                <DropdownItem>
                  <Link className="servicesDrop" to="/lash-extensions" title="See what we offer">Lash Extensions</ Link>
                </DropdownItem>

                <DropdownItem>
                  <Link className="servicesDrop" to="/teeth-treatment" title="See what we offer">Teeth Treatments</ Link>
                </DropdownItem>

                <DropdownItem>
                  <Link className="servicesDrop" to="/lip-filler" title="See what we offer">Needle Free Lip Fillers</Link>
                </DropdownItem>
               
                <DropdownItem>
                  <Link className="servicesDrop" to="/fat-dissolve" title="See what we offer">Needle Free Fat Dissolve</Link>
                </DropdownItem>

                <DropdownItem>
                  <Link className="servicesDrop" to="/face-and-wax" title="See what we offer">Facials and Waxing</Link>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          
            <NavItem className="aboutBtn">
              <Link className="about" to="/about" title="Learn about us">About</Link>
            </NavItem>

            <NavItem>
              <Link className="contact" to="/contact-us" title="Contact us">Contact</Link>
            </NavItem>

            <NavItem>
              <Link className="contactList" to="/contact-list" title="View all inquiries">Contact List</Link>
            </NavItem>

            <NavItem>
              <Link className="login" to="/login" title="login"></Link>
            </NavItem>  
          </Nav>
          <SocialButtons />
           
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;