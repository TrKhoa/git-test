import React from 'react';
import { Navbar,NavbarBrand,NavLink,NavItem,Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
export default function NavigationBar(){
  return(
    <Navbar color="primary" expand="md" dark>
        <NavbarBrand>
          <Link className="text-white" to="/">Khoa</Link>
        </NavbarBrand>

          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="text-white" to="/nhan-vien"><i class="fa fa-users" aria-hidden="true" /> Nhân viên</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-white" to="/phong-ban"><i class="fa fa-id-card" aria-hidden="true" /> Phòng ban</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-white" to="/bang-luong"><i class="fa fa-money" aria-hidden="true" /> Bảng lương</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-white" to="/bang-luong"><i class="fa fa-sea" aria-hidden="true" /> Bảng lương</Link>
              </NavLink>
            </NavItem>
            </Nav>

      </Navbar>
  )
}
