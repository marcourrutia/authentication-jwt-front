import React from "react";
import { useContext } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Context } from "../store/context";

export const NavBar = () => {
  const { store, actions } = useContext(Context);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ padding: "10px 20px", position: "fixed", width: "100%" }}
    >
      <Container>
        <Navbar.Brand href="#" style={{ fontWeight: "bold", color: "#f1f1f1" }}>
          devMarco
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {store.token ? (
            <Button
              variant="outline-light"
              onClick={() => actions.setToken("")}
              style={{ fontWeight: "bold" }}
            >
              Logout
            </Button>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
