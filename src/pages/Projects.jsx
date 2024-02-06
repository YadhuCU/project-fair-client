import { Header } from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import { useEffect, useState } from "react";
import { getAllProjectAPI } from "../services/allAPIs";

function Projects() {
  const [allProject, setAllProject] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      const result = await getAllProjectAPI(reqHeader);
      if (result.status === 200) {
        setAllProject(result.data);
      } else {
        console.log(result);
      }
    }
  };
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
        <Row className="mt-5 container-fluid">
          {allProject.length > 0 &&
            allProject.map((item, index) => (
              <Col className="mb-5" key={index} sm={12} md={6} lg={4}>
                <ProjectCard project={item} />
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}

export default Projects;
