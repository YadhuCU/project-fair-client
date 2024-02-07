import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { SERVER_URL } from "../services/serverURL";
import { ToastContainer, toast } from "react-toastify";

EditProject.propTypes = {
  project: PropTypes.object,
};

export function EditProject({ project }) {
  const [show, setShow] = useState(false);

  const { title, languages, overview, github, website, projectImage, _id } =
    project;

  const [projectData, setProjectData] = useState({
    title,
    languages,
    overview,
    github,
    website,
    projectImage: "",
    _id,
  });

  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (projectData.projectImage) {
      setPreview(URL.createObjectURL(projectData.projectImage));
    } else {
      setPreview("");
    }
  }, [projectData.projectImage]);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setProjectData({
      title,
      languages,
      overview,
      github,
      website,
      projectImage: "",
      _id,
    });
    setPreview("");
  };

  const handleEditProfile = () => {
    const { title, languages, overview, github, website, projectImage } =
      projectData;
    if (!title || !languages || !overview || !github || !website) {
      toast.warning("please fill the form completely.");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);
      preview
        ? reqBody.append("projectImage", projectImage)
        : reqBody.append("projectImage", project.projectImage);

      // api call
      const token = sessionStorage.getItem("token");
      console.log(token);
      console.log(project);

      if (token) {
        if (preview) {
          const reqHeader = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          };
        } else {
          const reqHeader = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };
        }
      }
    }
  };

  return (
    <>
      <button onClick={handleShow} className=" btn ">
        <i className="fa-solid fa-edit" />
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      projectImage: e.target.files[0],
                    })
                  }
                />
                <img
                  src={
                    preview ? preview : `${SERVER_URL}/uploads/${projectImage}`
                  }
                  className="w-100"
                  alt="upload Image"
                />
              </label>
            </div>
            <div className="col-lg-6">
              <div className="mt-2">
                <input
                  className="form-control"
                  placeholder="Project Title"
                  value={projectData.title}
                  onChange={(e) =>
                    setProjectData({ ...projectData, title: e.target.value })
                  }
                />
              </div>
              <div className="mt-2">
                <input
                  className="form-control"
                  placeholder="Language Used"
                  value={projectData.languages}
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      languages: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-2">
                <input
                  className="form-control"
                  placeholder="Project Github Link"
                  value={projectData.github}
                  onChange={(e) =>
                    setProjectData({ ...projectData, github: e.target.value })
                  }
                />
              </div>
              <div className="mt-2">
                <input
                  className="form-control"
                  placeholder="Project Website Link"
                  value={projectData.website}
                  onChange={(e) =>
                    setProjectData({ ...projectData, website: e.target.value })
                  }
                />
              </div>
              <div className="mt-2">
                <input
                  className="form-control"
                  placeholder="Project Overview"
                  value={projectData.overview}
                  onChange={(e) =>
                    setProjectData({ ...projectData, overview: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn gradient-light" onClick={handleClose}>
            Close
          </button>
          <button
            style={{ color: "var(--bg-clr-2)" }}
            className="btn gradient-dark"
            onClick={handleEditProfile}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} />
    </>
  );
}
