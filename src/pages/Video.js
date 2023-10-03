import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export default function Video() {
  const talkingItOutSrc = "https://www.youtube.com/watch?v=n_wZz6aXJBA";
  return (
    <div>
      <Container fluid>
        <h1 className="page-title d-flex justify-content-center">Video</h1>
      </Container>
      <Container fluid className="">
        <Row className="m-2 mb-0">
          <h2 className="mb-0">Park</h2>
        </Row>
        <Row className="m-3 mt-0">
          <Col className="mb-2 mt-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n_wZz6aXJBA?si=MzTnqJ-fuFHPcuzj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </Col>
          <Col className="mb-2 mt-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Dtj8QrMJT08?si=AMSrn5PM6V6B9Qwe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
          <Col className="mb-2 mt-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YXKaUYFbOjY?si=AYruiRTlsGg168bA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container fluid className="m-2 p-2">
        <Row>
          <h2>Travel Vlogs</h2>
        </Row>
        <Row className="m-3">
          <Col className="mb-2 mt-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-MdYdaUWM50?si=tA3Czxs5xYmN_i79"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Col>
          <Col className="mb-2 mt-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y77lHI1N2E8?si=Jta9fGqynTfPMHfD"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>

          <Col className="mb-2 mt-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NYjKX5r-cq4?si=XkJqSS4Js8lxmGRA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container fluid className="m-2 p-2">
        <Row>
          <h2>Music Documentary</h2>
        </Row>
        <Row className="m-3">
          <Col className="mb-2 mt-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/prCBBqRO95s?si=WzyCMdjfo-nRcytb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
