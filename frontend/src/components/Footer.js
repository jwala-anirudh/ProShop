import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; ProShop</Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            Made with ❤ by{" "}
            <a href="https://www.instagram.com/anirudhjwala/">Anirudh Jwala</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
