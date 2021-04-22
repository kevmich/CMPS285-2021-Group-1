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

import mainButton from './Buttons/mainButton';
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

            <NavItem className="mainBtn">
              <Link
                className="home"
                to="/"
                title="Go to the homepage"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <mainButton className="secondBtn">Home</mainButton>
              </Link>
            </NavItem>

            <UncontrolledDropdown
              className="charlieBtn"
            >
              <DropdownToggle
                nav
                caret
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Services
              </DropdownToggle>
              <DropdownMenu right>

                <DropdownItem className="alphaBtn">
                  <Link
                    to="/lash-extensions"
                    title="See what we offer"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <mainButton>
                      Lash Extensions
                    </mainButton>
                  </ Link>
                </DropdownItem>

                <DropdownItem className="alphaBtn">
                  <Link
                    to="/teeth-treatment"
                    title="See what we offer"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <mainButton>
                      Teeth Treatments
                    </mainButton>
                  </ Link>
                </DropdownItem>

                <DropdownItem className="alphaBtn">
                  <Link
                    to="/lip-filler"
                    title="See what we offer"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <mainButton>
                      Needle Free Lip Fillers
                    </mainButton>
                  </Link>
                </DropdownItem>
               
                <DropdownItem className="alphaBtn">
                  <Link
                    to="/fat-dissolve"
                    title="See what we offer"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <mainButton>
                      Needle Free Fat Disolve
                    </mainButton>
                  </Link>
                </DropdownItem>

                <DropdownItem className="alphaBtn">
                  <Link
                    to="/face-and-wax"
                    title="See what we offer"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <mainButton>
                      Facials and Waxing
                    </mainButton>
                  </Link>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          
            <NavItem className="mainBtn">
              <Link
                className="about"
                to="/about"
                title="Learn about us"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <mainButton className="secondBtn">
                  About
                </mainButton>
              </Link>
            </NavItem>

            <NavItem className="mainBtn">
              <Link
                className="contact"
                to="/contact-us"
                title="Contact us"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <mainButton className="secondBtn">
                  Contact
                </mainButton>
              </Link>
            </NavItem>

            <NavItem className="mainBtn">
              <Link
                className="blog"
                to="/blog"
                title="News"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <mainButton className="secondBtn">
                  Blog
                </mainButton>
              </Link>
            </NavItem>

            <NavItem className="mainBtn">
              <Link
                className="portfolioPage"
                to="/portfolio"
                title="See our work"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <mainButton className="secondBtn">
                  Portfolio
                </mainButton>
              </Link>
            </NavItem>

          </Nav>
          <div className="button_container">
          <SocialButtons />
          <UncontrolledDropdown
            className="charlieBtn"
          >
            <DropdownToggle
                nav
                caret
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Admin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="alphaBtn">
                  <Link
                    to="/login"
                    title="Admin Login"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <mainButton>
                      Admin Login
                    </mainButton>
                  </Link>
                </DropdownItem>
                <DropdownItem className="alphaBtn">
                  <Link
                    to="/contact-list"
                    title="See current inquiries"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <mainButton>
                      Contact List
                    </mainButton>
                  </Link>
                </DropdownItem>
                <DropdownItem className="alphaBtn">
                  <Link
                    to="/newblog"
                    title="Create or edit a blog post"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <mainButton>
                      Add/Edit Blog Post
                    </mainButton>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown>
          </div>
                  
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;