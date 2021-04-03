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



            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>

            
              <DropdownMenu right>

              
                <DropdownItem>
                <NavLink href="/Services/" title="See what we offer">Lash Extensions</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink href="/Services/" title="See what we offer">Teeth Treatments</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink href="/Services/" title="See what we offer">Needle Free Lip Fillers</NavLink>
                </DropdownItem>
               
                <DropdownItem>
                <NavLink href="/Services/" title="See what we offer">Needle Free Fat Dissolve</NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink href="/Services/" title="See what we offer">Facials and Waxing</NavLink>
                </DropdownItem>



              </DropdownMenu>
            </UncontrolledDropdown>


            
            <NavItem>
              <NavLink href="/About/" title="Learn about us">About</NavLink>
            </NavItem>



            <NavItem>
              <NavLink href="/Contact/" title="Contact us">Contact</NavLink>
            </NavItem>



            <NavItem>
              <NavLink href="/ListPage/" title="View all inquiries">Contact List</NavLink>
            </NavItem>




          </Nav>


          <NavbarText>
            Login Button Here!

          </NavbarText>
         
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;