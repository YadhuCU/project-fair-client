import { useState } from "react";
import { Card, Modal, Row, Col } from "react-bootstrap";

export const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        style={{ width: "28rem", color: "var(--bg-clr)" }}
        className="shadow gradient-dark"
        onClick={handleShow}
      >
        <Card.Img
          width={"100%"}
          height={"250px"}
          src="https://source.unsplash.com/random"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header
          style={{ color: "var(--text-clr)" }}
          className="gradient-light"
          closeButton
        >
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ color: "var(--text-clr)" }}
          className="gradient-light"
        >
          <Row>
            <Col md={6}>
              <img
                style={{ height: "250px" }}
                className="img-fluid"
                src="https://source.unsplash.com/random"
              />
            </Col>
            <Col md={6}>
              <h3>Project Title</h3>
              <p>
                Project Overview:{" "}
                <span style={{ fontWeight: "200" }} className="">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident.
                </span>
              </p>
              <p>
                Language Used: <span className="fw-bolder">HTML, CSS, JS</span>
              </p>
            </Col>
          </Row>
          <div style={{ fontSize: ".9rem" }} className="mt-3">
            <a
              href="htts://github.com/YadhuCU"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--text-clr)",
                marginRight: "1rem",
              }}
            >
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a
              style={{
                color: "var(--text-clr)",
                marginRight: "1rem",
              }}
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-link fa-2x"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
