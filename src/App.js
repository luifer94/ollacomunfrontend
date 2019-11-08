import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from "./modules/home/HomePage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";



export default class App extends React.Component {

  state = {
    showRegisterOlla: false
  };

  togglePopup = () => {
    const { showRegisterOlla } = this.state;
    this.setState({
      showRegisterOlla: !showRegisterOlla
    });
  }



  renderHomePage = (props) => {
    return (<HomePage {...props} showRegisterOlla={this.state.showRegisterOlla} togglePopup={this.togglePopup} />);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand><Link to={'/'}> ¡La unión hace la fuerza! </Link></Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Button variant="outline-primary" onClick={this.togglePopup} showRegisterOlla={this.state.showRegisterOlla}> Registrar olla común</Button>
          </Navbar>
          <Switch>
            <Route
              path='/'
              render={this.renderHomePage}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
