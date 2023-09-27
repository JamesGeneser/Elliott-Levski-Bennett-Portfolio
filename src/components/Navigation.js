import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Contact } from "./Contact";

export default function Navigation() {
  console.log(window.location.href);
  return (
    <>
      <Navbar expand="md" className=" ">
        {" "}
        <Container fluid className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="nav me-auto d-flex justify-content-around">
              {" "}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/video">Video</Nav.Link>
              <Nav.Link href="/live-performance">Live Performance</Nav.Link>
              <Nav.Link href="/art-design">Art/Design</Nav.Link>
              <Nav.Link href=" /about-me">About Me</Nav.Link>
              <Contact />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// export default Navigation;
