import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <Container fluid className="introduction">
        <h1>Elliott Levski Bennett</h1>
        <h3>Journeyman Filmmaker</h3>
      </Container>

      <Card className="contact-information m-4 p-1">
        <Card.Title className="m-2">Contact Me</Card.Title>
        <Card.Body>
          <Row>
            <Col xs={4}>E-mail:</Col>
            <Col xs={8}>elliott-bennett@email.com</Col>
          </Row>
          <Row>
            <Col xs={4}>Phone:</Col>
            <Col xs={8}>(xxx)-xxx-xxxx</Col>
          </Row>
          <Row className="travel-preference">
            Pheonix-based. Open to travel in America and Canada.
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
