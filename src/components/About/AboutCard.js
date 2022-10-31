import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { AiOutlineCheck } from 'react-icons/ai'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hell Everyone, I am <span className="purple">Tilak Khatri </span>
            from <span className="purple"> Pokhara, Nepal.</span>
            <br />I am a Engineering student persuing computer engineering from IOE,Nepal.
            <br />
            Apart from My Field, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineCheck /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineCheck /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <AiOutlineCheck /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning something new everyday take you mile far than a lazy genius"{" "}
          </p>
          <footer className="blockquote-footer">Tilak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
