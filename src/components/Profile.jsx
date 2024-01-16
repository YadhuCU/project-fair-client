import { useState } from "react";
import { Collapse } from "react-bootstrap";
import uploadImage from "../assets/profile-picture.png";

export const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="d-flex rounded p-2 justify-content-between">
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className="btn gradient-dark">
          <i
            style={{ color: "var(--bg-clr)" }}
            className="fa-solid fa-chevron-down"
          ></i>
        </button>
      </div>
      <Collapse in={open}>
        <div
          className="row p-5 justify-content-center mt-5 "
          id="example-collapse-text"
        >
          <label className="text-center">
            <input style={{ display: "none" }} type="file" />
            <img
              className="rounded-circle"
              width={"200px"}
              height={"200px"}
              src={uploadImage}
              alt="uploaded Image"
            />
          </label>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Github URL"
              className="form-control"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              placeholder="LinkedIn URL"
              className="form-control"
            />
          </div>
          <div className="mt-3 row">
            <button
              className="btn gradient-dark"
              style={{ color: "var(--bg-clr)" }}
            >
              Submit
            </button>
          </div>
        </div>
      </Collapse>
    </>
  );
};
