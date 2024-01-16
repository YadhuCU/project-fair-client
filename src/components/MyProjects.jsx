import { EditProject } from "./EditProject";
import { AddProject } from "./AddProject";

export const MyProjects = () => {
  return (
    <div className="card shadow p-3">
      <div className="d-flex justify-content-between">
        <h2>My Projects</h2>
        <div>
          {" "}
          <AddProject />{" "}
        </div>
      </div>
      <div className="mt-4">
        <div className="border rounded d-flex justify-content-between align-items-center mb-2 p-2">
          <h5>Project Title</h5>
          <div className="icons d-flex align-items-center">
            <EditProject />
            <a
              target="_blank"
              className="btn"
              href="https://github.com/YadhuCU/T-Notes2"
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
    </div>
  );
};
