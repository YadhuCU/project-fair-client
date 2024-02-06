import PropTypes from "prop-types";
import { useState } from "react";
import { Card, Modal, Row, Col } from "react-bootstrap";
import { SERVER_URL } from "../services/serverURL";

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export function ProjectCard({ project }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(project);
  return (
    <>
      {project && (
        <Card
          style={{ width: "28rem", color: "var(--bg-clr)" }}
          className="shadow gradient-dark"
          onClick={handleShow}
        >
          <Card.Img
            width={"100%"}
            height={"250px"}
            src={
              project?.projectImage
                ? `${SERVER_URL}/uploads/${project.projectImage}`
                : "https://source.unsplash.com/random"
            }
            style={{ objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
          </Card.Body>
        </Card>
      )}
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header
          style={{ color: "var(--text-clr)" }}
          className="gradient-light"
          closeButton
        >
          <Modal.Title>{project?.title}</Modal.Title>
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
                src={
                  project?.projectImage
                    ? `${SERVER_URL}/uploads/${project.projectImage}`
                    : "https://source.unsplash.com/random"
                }
              />
            </Col>
            <Col md={6}>
              <h3>{project?.title}</h3>
              <p>
                Project Overview:{" "}
                <span style={{ fontWeight: "200" }} className="">
                  {project?.overview}
                </span>
              </p>
              <p>
                Language Used:{" "}
                <span className="fw-bolder">{project?.languages}</span>
              </p>
            </Col>
          </Row>
          <div style={{ fontSize: ".9rem" }} className="mt-3">
            <a
              href={project?.github}
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
              href={project?.website}
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
}
