import { Navigate, NavLink as ReactLink, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
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
  NavbarText,
} from "reactstrap";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";

function CustomNavbar(args) {

  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail())
  }, [login])

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false)
      navigate("/")
    })
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-4">
        <NavbarBrand tag={ReactLink} to="/">Blog World</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                New Feed
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/services">
                Services
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/services">Services</DropdownItem>
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem>LinkedIn</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>

            {
              login && (
                <>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/user/profile-info">
                      Profile Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/user/dashboard">
                      {user.email}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={logout}>
                      Logout
                    </NavLink>
                  </NavItem>
                </>
              )
            }


            {
              !login && (
                <>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/login">
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/signup">
                      Signup
                    </NavLink>
                  </NavItem>s
                </>
              )
            }

          </Nav>


        </Collapse>
      </Navbar>
    </div >
  );
}

export default CustomNavbar;
