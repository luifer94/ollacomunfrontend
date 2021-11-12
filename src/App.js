import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./modules/home/HomePage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class App extends React.Component {
  state = {
    showRegisterOlla: false,
  };

  togglePopup = () => {
    const { showRegisterOlla } = this.state;
    this.setState({
      showRegisterOlla: !showRegisterOlla,
    });
  };

  renderHomePage = (props) => {
    return (
      <HomePage
        {...props}
        showRegisterOlla={this.state.showRegisterOlla}
        togglePopup={this.togglePopup}
      />
    );
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" variant="light" style={{ color: "green" }}>
            <Container>
              <Navbar.Brand>
                <Link style={{ color: "green" }} to={"/"}>
                  {" "}
                  ¡Apoyemos a nuestra gente!{" "}
                </Link>
              </Navbar.Brand>
              <Nav className="mr-auto"></Nav>
              <Button
                variant="outline-primary"
                style={{ color: "green", borderColor: "green" }}
                showRegisterOlla={this.state.showRegisterOlla}
              >
                {" "}
                <a style={{ color: "green", }} rel="noopener" target="_blank" href="https://forms.gle/UEj6wzzfGeEciFVu8">Registrar olla común</a>
                
              </Button>
            </Container>
          </Navbar>

          <Switch>
            <Route path="/" render={this.renderHomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
