import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <Container fluid className="introduction-container mt-4 mb-4 ">
        <Row>
          <Col xs="4">
            {" "}
            <img
              className="elliott-chaplin"
              src={require("../media/elliott-chaplin.jpg")}
            />
          </Col>
          <Col className="" xs="6" sm="6">
            {" "}
            <img
              src={require("../media/handwriting/Elliott-Bennett.png")}
              className="title writing"
            />
            <img
              src={require("../media/handwriting/Journeyman-Filmmaker.png")}
              className="sub-title writing"
            />
          </Col>
        </Row>

        <Col className=""> </Col>
      </Container>
      <Container fluid className="about-me-container">
        <Row>
          <Col xs="12" md="12" lg="5" xl="6" xxl="6" className="">
            {" "}
            <Card className="about-me-card mb-5">
              <Card.Img
                className="profile-home p-0"
                src={require("../media/elliott-sunset.jpg")}
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end p-0 mb-5 ">
                {" "}
                <Card.Img
                  className="intro-text mb-5 pb-5"
                  src={require("../media/handwriting/Intro-Text.png")}
                />
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {" "}
          <Col xs="12" className="text-center mb-3">
            {" "}
            <img
              src={require("../media/handwriting/Reel.png")}
              className=" writing reel-title text-center"
            />
          </Col>
        </Row>
        <Row>
          <Col className="mb-5" xs="12">
            {" "}
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
