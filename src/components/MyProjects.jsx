import { EditProject } from "./EditProject";
import { AddProject } from "./AddProject";
import { useState, useEffect, useContext } from "react";
import { getUserProjectAPI } from "../services/allAPIs";
import { addProjectResponseContext } from "../context/ContextShare";

export function MyProjects() {
  const [userProject, setUserProject] = useState([]);
  const { addProjectResponse } = useContext(addProjectResponseContext);

  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse]);

  const getUserProjects = async () => {
    const token = sessionStorage.getItem("token");
    console.log("token", token);
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      const result = await getUserProjectAPI(reqHeader);

      console.log("result", result);

      if (result.status === 200) {
        setUserProject(result.data);
      } else {
        console.error(result);
      }
    }
  };

  return (
    <div className="card shadow p-3 " style={{ background: "none" }}>
      <div className="d-flex justify-content-between">
        <h2>My Projects</h2>
        <div>
          {" "}
          <AddProject />{" "}
        </div>
      </div>

      {userProject.length > 0 ? (
        userProject.map((project, index) => (
          <div key={index} className="mt-4 ">
            <div className="border rounded d-flex justify-content-between align-items-center mb-2 p-2">
              <h5>{project?.title}</h5>
              <div className="icons d-flex align-items-center">
                <EditProject project={project} />
                <a
                  target="_blank"
                  className="btn"
                  href={project?.github}
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <button className="btn">
                  <i className="fa-solid fa-trash" />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-danger">No projects are uploaded yet!!</div>
      )}
    </div>
  );
}
