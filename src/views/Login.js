import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/context";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { actions } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    fetch("http://localhost:5050/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMessage(data.msg);
        if (data.token) {
          actions.setToken(data.token);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again.");
      });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#1a1a1a" }}
    >
      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
            className="p-4 rounded"
            style={{
              backgroundColor: "#333",
              color: "#f1f1f1",
              maxWidth: "400px",
            }}
          >
            <h3 className="text-center mb-4" style={{ color: "#fff" }}>
              Login
            </h3>
            {message && (
              <Alert variant={message === "Welcome" ? "success" : "danger"}>
                {message}
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "#444",
                  color: "#fff",
                  border: "none",
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  backgroundColor: "#444",
                  color: "#fff",
                  border: "none",
                }}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{ backgroundColor: "#0066cc", border: "none" }}
            >
              Login
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate("/")}
              className="w-100"
              style={{
                backgroundColor: "#444",
                border: "none",
                marginTop: "10px",
              }}
            >
              Back
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
