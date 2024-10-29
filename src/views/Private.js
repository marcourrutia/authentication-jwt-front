import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  ListGroup,
} from "react-bootstrap";

export const Dashboard = () => {
  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        color: "#f1f1f1",
      }}
    >
      <Row>
        <Col md={3} style={{ backgroundColor: "#333", minHeight: "100vh" }}>
          <Navbar expand="md" className="flex-md-column align-items-start p-3">
            <Navbar.Brand href="#" className="text-white mb-4">
              Dashboard
            </Navbar.Brand>
            <Nav className="flex-column w-100">
              <Nav.Link href="#empresas" style={{ color: "#f1f1f1" }}>
                Empresas
              </Nav.Link>
              <Nav.Link href="#lanzamientos" style={{ color: "#f1f1f1" }}>
                Lanzamientos
              </Nav.Link>
              <Nav.Link href="#perfil" style={{ color: "#f1f1f1" }}>
                Perfil
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>

        <Col md={9} className="p-4">
          <h2 className="mb-4">
            Más Allá de la Tierra: Mi Pasión Astronómica y los Cohetes
          </h2>

          <Row>
            <Col md={6} className="mb-4">
              <Card style={{ backgroundColor: "#444", color: "#f1f1f1" }}>
                <Card.Body>
                  <Card.Title>SpaceX</Card.Title>
                  <Card.Text>
                    SpaceX es una compañía de transporte espacial fundada por
                    Elon Musk, reconocida por sus lanzamientos reutilizables.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{ backgroundColor: "#444", color: "#f1f1f1" }}
                    >
                      CEO: Elon Musk
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ backgroundColor: "#444", color: "#f1f1f1" }}
                    >
                      Lanzamientos Exitosos: 130+
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ backgroundColor: "#444", color: "#f1f1f1" }}
                    >
                      Cohetes: Falcon 9, Falcon Heavy, Starship
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card style={{ backgroundColor: "#444", color: "#f1f1f1" }}>
                <Card.Body>
                  <Card.Title>Blue Origin</Card.Title>
                  <Card.Text>
                    Blue Origin es una compañía fundada por Jeff Bezos enfocada
                    en tecnologías espaciales y exploración suborbital.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{ backgroundColor: "#444", color: "#f1f1f1" }}
                    >
                      CEO: Jeff Bezos
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ backgroundColor: "#444", color: "#f1f1f1" }}
                    >
                      Lanzamientos Exitosos: 15+
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ backgroundColor: "#444", color: "#f1f1f1" }}
                    >
                      Cohetes: New Shepard, New Glenn
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ backgroundColor: "#333", color: "#f1f1f1" }}>
                <Card.Body>
                  <Card.Title>Resumen de Cohetería</Card.Title>
                  <Card.Text>
                    Actualmente, múltiples compañías trabajan en la exploración
                    espacial privada, con la meta de hacer los viajes espaciales
                    accesibles y sostenibles.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
