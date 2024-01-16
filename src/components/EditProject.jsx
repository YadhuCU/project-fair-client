import { useState } from "react";
import { Modal } from "react-bootstrap";
import imageUpload from "../assets/image-upload.png";

export const EditProject = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
                <input type="file" style={{ display: "none" }} />
                <img src={imageUpload} className="w-100" alt="upload Image" />
              </label>
            </div>
            <div className="col-lg-6">
              <div className="mt-2">
                <input className="form-control" placeholder="Project Title" />
              </div>
              <div className="mt-2">
                <input className="form-control" placeholder="Language Used" />
              </div>
              <div className="mt-2">
                <input
                  className="form-control"
                  placeholder="Project Github Link"
                />
              </div>
              <div className="mt-2">
                <input
                  className="form-control"
                  placeholder="Project Website Link"
                />
              </div>
              <div className="mt-2">
                <input
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
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
