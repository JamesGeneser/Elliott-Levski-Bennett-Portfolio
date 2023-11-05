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
        className="introduction-container mt-4 mb-4  d-flex flex-column justify-content-start"
      >
        <img
          src={require("../media/handwriting/Elliott-Bennett.png")}
          className="title writing"
        />
        <img
          src={require("../media/handwriting/Journeyman-Filmmaker.png")}
          className="sub-title  ms-5 ps-5 writing"
        />
      </Container>
      <Container fluid className="contact-container d-flex flex-row-reverse">
        <Col md="6" lg="5" xl="5" xxl="4">
          {" "}
          <Card className="contact-information-card rounded m-4 me-5 ps-0 p-4 pe-4 ">
            <Card.Title className="ms-3 mb-1 contact-information-title">
              <img
                src={require("../media/handwriting/Contact-Info.png")}
                className="writing"
              />
            </Card.Title>
            <hr className="mt-1 ms-1" />
            <Card.Body className="mt-0 pt-0 contact-information">
              <Row>
                <Col xs={4} lg="4" xl="4">
                  <img
                    src={require("../media/handwriting/Email.png")}
                    className="writing"
                  />
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
          <Col xs="12" md="12" lg="5" xl="6" xxl="6" className="">
            {" "}
            <Card className="about-me-card mb-5">
              <Card.Img
                className="profile-home"
                src={require("../media/elliott-chaplin.jpg")}
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end p-0">
                {" "}
                <Card.Img
                  className="intro-text "
                  src={require("../media/handwriting/Intro-Text.png")}
                />
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="12"
            lg="7"
            xl="5"
            xxl="5"
            className="p-2 pb-4"
          >
            {" "}
            <Row sm="4" lg="4">
              {" "}
              <img
                src={require("../media/handwriting/Reel.png")}
                className="ms-5 writing reel-title"
              />
            </Row>
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
