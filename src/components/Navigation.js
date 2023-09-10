import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Contact } from "./Contact";

export default function Navigation() {
  return (
    <>
      <Navbar className="Navigation">
        <Container fluid>
          {" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar">
              {" "}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/video">Video</Nav.Link>
              <Nav.Link href="/live-performance">Live Performance</Nav.Link>
              <Nav.Link href="/art-design">Art/Design</Nav.Link>
              <Nav.Link href="/about-me">About Me</Nav.Link>
              <Contact />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// export default Navigation;
