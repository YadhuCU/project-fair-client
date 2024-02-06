import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import imageUpload from "../assets/image-upload.png";
import { ToastContainer, toast } from "react-toastify";
import { addProjectAPI } from "../services/allAPIs";
import { useContext } from "react";
import { addProjectResponseContext } from "../context/ContextShare";

export const AddProject = () => {
  const { setAddProjectResponse } = useContext(addProjectResponseContext);
  const [show, setShow] = useState(false);
  const [projectData, setProjectData] = useState({
    title: "",
    languages: "",
    overview: "",
    github: "",
    website: "",
    projectImage: "",
  });
  const [fileStatus, setFileStatus] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    console.log(projectData);
    if (
      projectData.projectImage.type == "image/png" ||
      projectData.projectImage.type == "image/jpg" ||
      projectData.projectImage.type == "image/jpeg"
    ) {
      setFileStatus(false);
      setPreview(URL.createObjectURL(projectData.projectImage));
    } else {
      setFileStatus(true);
      setProjectData({ ...projectData, projectImage: "" });
      setPreview("");
    }
  }, [projectData.projectImage]);

  console.log(projectData);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setProjectData({
      title: "",
      languages: "",
      overview: "",
      github: "",
      website: "",
      projectImage: "",
    });
    setPreview("");
    setFileStatus(false);
  };

  const handleAddProject = async () => {
    const { title, languages, overview, github, website, projectImage } =
      projectData;

    if (
      !title ||
      !languages ||
      !overview ||
      !github ||
      !website ||
      !projectImage
    ) {
      toast.info("Please fill the form comple");
    } else {
      //TODO: setting up the request because it contain file

      // req body
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("projectImage", projectImage);

      // req header
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        console.log("reqHeader", reqHeader);
        try {
          const response = await addProjectAPI(reqBody, reqHeader);
          console.log(response);
          if (response.status === 200) {
            setAddProjectResponse(response.data);
            console.log(response.data);
            handleClose();
          } else {
            toast.warning(response.response.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <>
      <button
        style={{ color: "var(--bg-clr)" }}
        onClick={handleShow}
        className=" btn gradient-dark"
      >
        Add Project
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
                  src={preview ? preview : imageUpload}
                  className="w-100"
                  alt="upload Image"
                />
              </label>
              {fileStatus && (
                <div className="text-danger mt-4">
                  **Please upload files in the following extenstions: jpeg, jpg,
                  png
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <div className="mt-2">
                <input
                  value={projectData.title}
                  onChange={(e) =>
                    setProjectData({ ...projectData, title: e.target.value })
                  }
                  className="form-control"
                  placeholder="Project Title"
                />
              </div>
              <div className="mt-2">
                <input
                  value={projectData.languages}
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      languages: e.target.value,
                    })
                  }
                  className="form-control"
                  placeholder="Language Used"
                />
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) =>
                    setProjectData({ ...projectData, github: e.target.value })
                  }
                  value={projectData.github}
                  className="form-control"
                  placeholder="Project Github Link"
                />
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) =>
                    setProjectData({ ...projectData, website: e.target.value })
                  }
                  value={projectData.website}
                  className="form-control"
                  placeholder="Project Website Link"
                />
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) =>
                    setProjectData({ ...projectData, overview: e.target.value })
                  }
                  value={projectData.overview}
                  className="form-control"
                  placeholder="Project Overview"
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
            onClick={handleAddProject}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} />
    </>
  );
};
