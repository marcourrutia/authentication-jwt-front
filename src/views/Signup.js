import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    fetch("http://localhost:5050/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        if (response.status === 201) {
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.msg);
      })
      .catch((err) => {
        setError(true);
        setMessage(err.message);
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
              Sign Up
            </h3>
            {message && (
              <Alert variant={error ? "danger" : "success"}>{message}</Alert>
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
              Sign Up
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
