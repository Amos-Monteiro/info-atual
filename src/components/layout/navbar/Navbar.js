
import  { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light >
        <NavbarBrand href="/" className="me-auto">
          Inicio
          
        </NavbarBrand>
        
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/ciencias">Ciências</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/economia">
                Economia
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/esportes">
                Esportes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Tecnologia">
                Tecnologia
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  );
}


export default NavBar