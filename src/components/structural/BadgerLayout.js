import {React, useContext} from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import LoggedInContext from '../context/LoggedInContext';

import crest from '../../assets/uw-crest.svg'

function BadgerLayout(props) {


    const [userContext] = useContext(LoggedInContext);
    
    if (userContext.length !== 0) {
        return (
            
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img
                                alt="BadgerChat Logo"
                                src={crest}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            BadgerChat
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="logout">Logout</Nav.Link>
                            <NavDropdown title="Chatrooms">
                                {
                                   /* TODO Display a NavDropdown.Item for each chatroom that sends the user to that chatroom! */
                                   
                                    props.chatrooms.map(room => <NavDropdown.Item as={Link} to={"chatrooms/" + room} key={room}>{room}</NavDropdown.Item>)
                                   //<NavDropdown.Item as={Link} to="/chatrooms/Bascom">Bascom</NavDropdown.Item>
                                }
                            </NavDropdown>
    
                        </Nav>
                    </Container>
                </Navbar>
                <div className="body-spacer">
                    <Outlet />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img
                                alt="BadgerChat Logo"
                                src={crest}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            BadgerChat
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                            <Nav.Link as={Link} to="register">Register</Nav.Link>
                            <NavDropdown title="Chatrooms">
                                {
                                /* TODO Display a NavDropdown.Item for each chatroom that sends the user to that chatroom! */
                                
                                    props.chatrooms.map(room => <NavDropdown.Item as={Link} to={"chatrooms/" + room} key={room}>{room}</NavDropdown.Item>)
                                //<NavDropdown.Item as={Link} to="/chatrooms/Bascom">Bascom</NavDropdown.Item>
                                }
                            </NavDropdown>

                        </Nav>
                    </Container>
                </Navbar>
                <div className="body-spacer">
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default BadgerLayout;