import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const App = () => {
  const [showRegisterOlla, setShowRegisterOlla] = useState(false);

  const togglePopup = () => {
    setShowRegisterOlla(!showRegisterOlla);
  };

  const renderHomePage = (props) => {
    return (
      <HomePage
        {...props}
        showRegisterOlla={showRegisterOlla}
        togglePopup={togglePopup}
      />
    );
  };

  return (
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
            className="btn-hover"
            showRegisterOlla={showRegisterOlla}
          >
            {" "}
            <a
              style={{ color: "green" }}
              rel="noopener"
              target="_blank"
              href="https://forms.gle/Qj1m4XVAL37winH99"
            >
              Registrar olla común
            </a>
          </Button>
        </Container>
      </Navbar>

      {renderHomePage()}
    </div>
  );
};
export default App;
