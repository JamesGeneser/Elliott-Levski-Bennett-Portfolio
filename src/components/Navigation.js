import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Contact } from "./Contact";
import Brand from "./Brand";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Navigation() {
  const location = useLocation();
  //   console.log(location.pathname);

  //   const [home, setHome] = useState();

  //   useEffect(() => {
  //     const isHome = (location.pathname = "/") ? true : false;
  //     setHome((isHome = true ? (home = true) : (home = false)));
  //   });

  //   if (location.pathname == "/") {
  //     setHome(home === true);
  //   } else {
  //     setHome(home === false);
  //   }
  //   let isHome = (location.pathname = "/" ? true : false);
  //   console.log(isHome);

  //   function homePage() {
  //     const home = (location = "/" ? true : false);
  //   }

  //   setHome();
  //   {
  //     home = location = "/" ? true : false;
  //   }
  return (
    <>
      <Navbar expand="lg" className="navbar-light " variant="light">
        {" "}
        <Container fluid className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="nav me-auto d-flex justify-content-around">
              {" "}
              {location.pathname != "/" && <Nav.Link href="/">Home</Nav.Link>}
              <Nav.Link href="/video">Video</Nav.Link>
              <Nav.Link href="/live-performance">Live Performance</Nav.Link>
              <Nav.Link href="/art-design">Art/Design</Nav.Link>
              <Nav.Link href=" /about-me">About Me</Nav.Link>
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
