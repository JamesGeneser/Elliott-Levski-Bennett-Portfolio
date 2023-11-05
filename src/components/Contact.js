import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="nav-link" variant="" onClick={handleShow}>
        <img
          src={require("../media/handwriting/Contact.png")}
          className="nav-writing nav-contact"
        />
      </Button>

      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        className="contact-modal"
      >
        <Modal.Header className="" closeButton>
          <Modal.Title className="text-dark">
            {" "}
            <img
              className="contact-modal-title"
              src={require("../media/handwriting/Contact.png")}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact-information-modal">
          {" "}
          <Row>
            <Col xs={4}>
              <img
                className="contact-modal-type"
                src={require("../media/handwriting/Email.png")}
              />
            </Col>
            <Col className="text-dark" xs={8}>
              elliott-bennett@email.com
            </Col>
          </Row>
          <Row>
            <Col className="text-dark" xs={4}>
              Phone:
            </Col>
            <Col className="text-dark" xs={8}>
              (xxx)-xxx-xxxx
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
