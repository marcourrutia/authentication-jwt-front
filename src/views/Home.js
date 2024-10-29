import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#1a1a1a" }}
    >
      <Row>
        <Col className="text-center">
          <h1 style={{ color: "#f1f1f1", marginBottom: "2rem" }}>
            Welcome to devMarco JWT authentication proyect
          </h1>
          <Button
            variant="primary"
            onClick={handleSignup}
            className="m-2"
            style={{
              backgroundColor: "#0066cc",
              border: "none",
              width: "150px",
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="secondary"
            onClick={handleLogin}
            className="m-2"
            style={{
              backgroundColor: "#444",
              color: "#f1f1f1",
              border: "none",
              width: "150px",
            }}
          >
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
