import logo from './img/logo.png';
import './App.css';
import Home from './components/Home';
import ViewOrder from './components/ViewOrder';
import PlaceOrder from './components/PlaceOrder';
import CancelOrder from './components/CancelOrder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      {/* <button as={Link} to="/Main"> Start Here </button> */}

      <Router>

        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/Pizza-App"> <img src={logo} alt="logo" /> Pizzeria </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home"> Start Here </Nav.Link>
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
        </Switch>

      </Router>

    </>
  );
}

export default App;
