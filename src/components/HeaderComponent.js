import React,{ useState } from 'react';
import { Navbar,NavbarBrand,NavItem,Nav,Collapse,NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function Header(){
  const [navState,setNavState] = useState(false);

  return(
    <Navbar color="primary" expand="md" dark>

        <NavbarBrand className="text-white" to="/">
           Khoa
        </NavbarBrand>

        <NavbarToggler onClick={() => setNavState(!navState)} />

        <Collapse isOpen={navState} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className="mx-md-2">
              <NavLink className="text-white" to="/nhan-vien">
                <i className="fa fa-users" aria-hidden="true" /> Nhân viên
              </NavLink>
            </NavItem>
            <NavItem className="mx-md-2">
              <NavLink className="text-white" to="/phong-ban">
                <i className="fa fa-id-card" aria-hidden="true" /> Phòng ban
              </NavLink>
            </NavItem>
            <NavItem className="mx-md-2">
              <NavLink className="text-white" to="/bang-luong">
                <i className="fa fa-money" aria-hidden="true" /> Bảng lương
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

      </Navbar>
  )
}
