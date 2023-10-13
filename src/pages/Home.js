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
        <img
          src={require("../media/handwriting/Elliott-Bennett.png")}
          className="title"
        />

        <h3 className="sub-title ms-5 ps-5">Journeyman Filmmaker</h3>
      </Container>
      <Container fluid className="contact-container d-flex flex-row-reverse">
        <Col md="6" lg="5" xl="5" xxl="4">
          {" "}
          <Card className="contact-information-card rounded m-4 me-5 ps-0 p-3 pe-4 ">
            <Card.Title className="ms-2 mb-0 contact-information-title">
              Contact Information
            </Card.Title>
            <hr className="mt-1 ms-1" />
            <Card.Body className="mt-0 pt-0 contact-information">
              <Row>
                <Col xs={4} lg="4" xl="4">
                  E-mail:
                </Col>
                <Col xs={8} lg="8" xl="8">
                  elliott-bennett@email.com
                </Col>
              </Row>
              <Row>
                <Col xs={4} lg="4" xl="4">
                  Phone:
                </Col>
                <Col xs={8} lg="8" xl="8">
                  (xxx)-xxx-xxxx
                </Col>
              </Row>
              <Row className="travel-information">
                <Col> Pheonix-based. Open to travel in America and Canada.</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <Container fluid className="about-me-container">
        <Row>
          <Col xs="12" lg="6" xl="6" xxl="6" className="">
            {" "}
            <Card className="about-me-card ">
              <Card.Img
                className="profile-home"
                src={require("../media/elliott-chaplin.jpg")}
              />
              <Card.ImgOverlay className="d-flex flex-direction-column-reverse">
                <Card.Text className="about-me-text ">
                  {" "}
                  Passionately curious about the world, its history, and the
                  people in it.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="12" lg="5" xl="5" xxl="5" className="">
            {" "}
            <h4 className=" ms-5 reel-title">My Reel</h4>
            <iframe
              className="reel"
              src="https://www.youtube.com/embed/prCBBqRO95s?si=WzyCMdjfo-nRcytb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              border-radius="100px"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
