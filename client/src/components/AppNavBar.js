import React, { Component } from 'react';
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
  Container
} from 'reactstrap';

class AppNavBar extends Component {
        state = {
            isOpen: false
        }
        toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }

        render() {
            return (
                <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">The React List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/justinpalathunkal">
                                        Github
                                    </NavLink> 
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
            );
        }
    }





export default AppNavBar;

// import React, { Component } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
//   Container
// } from 'reactstrap';

// class AppNavBar extends Component {
//         state = {
//             isOpen: false
//         }
//         toggle = () => {
//             this.setState({
//                 isOpen: !this.state.isOpen
//             });
//         }

//         render() {
//             return (
//                 <div>
//                 <Navbar color="dark" dark expand="sm" className="mb-5">
//                     <Container>
//                         <NavbarBrand href="/">The React List</NavbarBrand>
//                         <NavbarToggler onClick={this.toggle}></NavbarToggler>
//                         <Collapse isOpen={this.state.isOpen} navbar>
//                             <Nav className="ml-auto" navbar>
//                                 <NavItem>
//                                     <NavLink href="https://github.com/justinpalathunkal">
//                                         Github
//                                     </NavLink> 
//                                 </NavItem>
//                             </Nav>
//                         </Collapse>
//                     </Container>
//                 </Navbar>
//             </div>
//             );
//         }
//     }

// export default AppNavBar;