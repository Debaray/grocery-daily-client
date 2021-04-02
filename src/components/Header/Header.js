import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Header.css';
import { UserContext } from '../../App';
import {
    Link
} from "react-router-dom";
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
            <div>
                <Navbar className="mt-3" collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand className="header-style">Grocery Daily</Navbar.Brand>
                    {
                        loggedInUser.email ? <h4 className="text-center mt-2 ml-5">{loggedInUser.name}</h4> :
                            <></>
                    }
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto align-items-lg-center">
                            <Link className="mr-5 text-style" to="/home">Home</Link>
                            <Link className="mr-5 text-style" to="/order">Orders</Link>
                            <Link className="mr-5 text-style" to="/admin">Admin</Link>
                            <Link className="mr-5 text-style" to="/deals">Deals</Link>
                            {
                                loggedInUser.email ? <Button onClick={() => setLoggedInUser({})} variant="danger">Log Out</Button> :
                                    <Link className="mr-auto" to="/login"><Button variant="success">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    );
};

export default Header;