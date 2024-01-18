import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Contact } from "./Contact";
import Brand from "./Brand";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <>
      <Navbar expand="lg" className="navbar-light " variant="light">
        {" "}
        <Container fluid className="">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="m-3 p-3 collapse-box "
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav pullRight className="nav me-auto">
              {" "}
              {location.pathname != "/" && (
                <Nav.Link href="/">
                  {" "}
                  <img
                    src={require("../media/handwriting/Home.png")}
                    className="nav-writing"
                  />
                </Nav.Link>
              )}
              <Nav.Link href="/video">
                <img
                  src={require("../media/handwriting/Video.png")}
                  className="nav-writing"
                />
              </Nav.Link>
              <Nav.Link href="/live-performance">
                {" "}
                <img
                  src={require("../media/handwriting/Live.png")}
                  className="nav-writing"
                />
              </Nav.Link>
              <Nav.Link href="/art-design">
                {" "}
                <img
                  src={require("../media/handwriting/Art.png")}
                  className="nav-writing"
                />
              </Nav.Link>
              <Nav.Link href=" /about-me">
                {" "}
                <img
                  src={require("../media/handwriting/About-Me.png")}
                  className="nav-writing about-me"
                />
              </Nav.Link>
              <Contact />
            </Nav>
          </Navbar.Collapse>

          {location.pathname != "/" && <Brand />}
        </Container>
      </Navbar>
    </>
  );
}

// export default Navigation;
