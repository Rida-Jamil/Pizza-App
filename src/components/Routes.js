import React from 'react';
import logo from '../img/logo.png';
import Home from './Home';
import ViewOrder from './ViewOrder';
import PlaceOrder from './PlaceOrder';
import CancelOrder from './CancelOrder';
// import Contact from './Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap';

function Routes() {
    return (
        <>
            <Router>

                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/"> <img src={logo} alt="logo" /> Pizzeria </Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/Home"> Start Here </Nav.Link>
                                <Nav.Link as={Link} to="/Contact"> Contact Us </Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>

                {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}

                <Switch>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/ViewOrder">
                        <ViewOrder />
                    </Route>
                    <Route path="/PlaceOrder">
                        <PlaceOrder />
                    </Route>
                    <Route path="/CancelOrder">
                        <CancelOrder />
                    </Route>
                    {/* <Route path="/Contact">
                        <Contact />
                    </Route> */}
                </Switch>

            </Router>
        </>
    )
}

export default Routes;