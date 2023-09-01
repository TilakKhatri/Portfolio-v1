import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/main-home.svg";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Namaste! {" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TILAK KHATRI</strong>
              </h1>

              <div style={{padding:20,marginLeft:'1.5rem'}} >
                <Type />
              </div>
            </Col>

            <Col md={4} style={{  marginTop:"4rem"}} >
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
