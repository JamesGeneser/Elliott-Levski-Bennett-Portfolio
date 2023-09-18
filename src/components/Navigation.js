import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Contact } from "./Contact";

export default function Navigation() {
  return (
    <>
      <Navbar expand="sm" className=" ">
        {" "}
        <Container fluid className=" d-flex justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="nav me-auto ">
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
