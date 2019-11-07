import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from "./modules/home/HomePage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand><Link to={'/'}> Logo </Link></Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Button variant="outline-primary">Boton 1</Button>
        </Navbar>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
