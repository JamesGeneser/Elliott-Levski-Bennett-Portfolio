import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="nav-link navElement" variant="" onClick={handleShow}>
        Contact Me
      </Button>

      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact-info"></Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
