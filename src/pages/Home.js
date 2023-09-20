import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <Container
        fluid
        className="introduction-container mt-4 mb-4 d-flex flex-column justify-content-start"
      >
        <h1 className="title ms-3 ps-4">Elliott Levski Bennett</h1>
        <h3 className="sub-title ms-5 ps-5">Journeyman Filmmaker</h3>
      </Container>
      <Container fluid className="contact-container d-flex flex-row-reverse">
        <Card className="contact-information-card rounded m-4 me-5 p-3 pe-4 ">
          <Card.Title className="ms-2 mb-0">Contact Information</Card.Title>
          <hr />
          <Card.Body className="mt-0 pt-0 contact-information">
            <Row>
              <Col xs={4}>E-mail:</Col>
              <Col xs={8}>elliott-bennett@email.com</Col>
            </Row>
            <Row>
              <Col xs={4}>Phone:</Col>
              <Col xs={8}>(xxx)-xxx-xxxx</Col>
            </Row>
            <Row className="travel-information">
              <Col> Pheonix-based. Open to travel in America and Canada.</Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container className="about-me-container">
        <Card className="about-me-card m-2">
          <Card.Img
            className="profile-home"
            src={require("../media/elliott-profile.jpg")}
          ></Card.Img>
          <Card.Body>
            <h5>Filmmaker. Performer. Storyteller.</h5>
            <p>
              Passionately curious about the world, its history, and the people
              in it.
            </p>
          </Card.Body>
        </Card>
      </Container>
      <Container className="reel-container">
        <Card>
          <Card.Title>Reel 2023</Card.Title>
        </Card>
      </Container>
    </div>
  );
}
