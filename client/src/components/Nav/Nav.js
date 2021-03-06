import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Nav.css';

class NavTemplate extends Component {
  state = {
    isOpen: false
  };

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="lg" className="mb-3">
          <NavbarBrand href="/">MTG Report</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            {
              this.props.displayName
              ?
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='/profile'>{this.props.displayName}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.props.doSignOut}>Sign Out</NavLink>
                </NavItem>
              </Nav>
              :
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href="/signin">Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Register</NavLink>
                </NavItem>
              </Nav>
            }
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavTemplate;
