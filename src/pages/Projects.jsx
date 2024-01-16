import { Header } from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <Header />
      <div className="project-page-design mt-5">
        <div className="d-flex justify-content-between px-3">
          <h1>All Projects</h1>
          <input
            style={{
              border: "2px solid var(--text-clr)",
              backgroundColor: "transparent",
              borderRadius: "10px",
              paddingInline: "10px",
            }}
            type="search"
            placeholder="Search by product"
          />
        </div>
        <Row className="mt-t container-fluid">
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Projects;
