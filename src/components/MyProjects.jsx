import { EditProject } from "./EditProject";
import { AddProject } from "./AddProject";
import { useState, useEffect, useContext } from "react";
import { deleteProjectAPI, getUserProjectAPI } from "../services/allAPIs";
import { addProjectResponseContext } from "../context/ContextShare";
import { editProjectResponseContext } from "../context/ContextShare";
import { toast } from "react-toastify";

export function MyProjects() {
  const [userProject, setUserProject] = useState([]);
  const { addProjectResponse } = useContext(addProjectResponseContext);
  const { editProjectResponse } = useContext(editProjectResponseContext);

  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse, editProjectResponse]);

  const getUserProjects = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      const result = await getUserProjectAPI(reqHeader);

      if (result.status === 200) {
        setUserProject(result.data);
      } else {
        console.error(result);
      }
    }
  };

  const handleDeleteProject = async (pid) => {
    console.log("pid", pid);
    const token = sessionStorage.getItem("token");
    console.log("token", token);
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await deleteProjectAPI(pid, reqHeader);
        console.log("result", result);
        if (result.status === 200) {
          getUserProjects();
        } else {
          toast.error(result.response.data);
        }
      } catch (error) {
        console.log(error);
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
                <button
                  onClick={() => handleDeleteProject(project?._id)}
                  className="btn"
                >
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
