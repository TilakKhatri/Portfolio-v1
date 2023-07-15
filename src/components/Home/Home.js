import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/main-home.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";

function Home() {
  return (
    <section>
      // <Particle />
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Namaste! {" "}
                <img src="https://user-images.githubusercontent.com/96524338/195518660-de85a102-ae2d-42f7-86d0-7e6e843b7dce.png" width="25px" height="30px" />
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TILAK KHATRI</strong>
              </h1>

              <div style={{ padding: 40, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
    </section>
  );
}

export default Home;
