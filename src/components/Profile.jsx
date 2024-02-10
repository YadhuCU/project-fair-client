import { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import uploadImage from "../assets/profile-picture.png";
import { SERVER_URL } from "../services/serverURL";
import { toast } from "react-toastify";
import { editUserAPI } from "../services/allAPIs";

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    profileImage: "",
    github: "",
    linkedin: "",
  });
  const [existingImage, setExistingImage] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { username, password, email, profile, github, linkedin } = user;
    setExistingImage(profile);

    if (user) {
      setUserData({
        ...userData,
        username,
        password,
        email,
        profileImage: "",
        github,
        linkedin,
      });
    }
  }, [open]);

  useEffect(() => {
    if (userData.profileImage) {
      setPreview(URL.createObjectURL(userData.profileImage));
    } else {
      setPreview("");
    }
  }, [userData?.profileImage]);

  const handleUpdateProfile = async () => {
    const { username, password, email, profileImage, github, linkedin } =
      userData;
    if (!github || !linkedin) {
      toast.info("Please fill the form.");
    } else {
      // proceed to update
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("password", password);
      reqBody.append("email", email);
      reqBody.append("github", github);
      reqBody.append("linkedin", linkedin);

      preview
        ? reqBody.append("profileImage", profileImage)
        : reqBody.append("profileImage", existingImage);

      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          Authorization: `Bearer ${token}`,
        };
        // api call.
        try {
          const result = await editUserAPI(reqBody, reqHeader);
          if (result.status === 200) {
            setOpen(!open);
            sessionStorage.setItem("user", JSON.stringify(result.data));
          } else {
            console.log(result);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

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
            <input
              style={{ display: "none" }}
              type="file"
              onChange={(e) =>
                setUserData({ ...userData, profileImage: e.target.files[0] })
              }
            />
            {/* {existingImage === "" ? ( */}
            {/*   <img */}
            {/*     className="rounded-circle" */}
            {/*     width={"200px"} */}
            {/*     height={"200px"} */}
            {/*     src={preview || uploadImage} */}
            {/*     alt="uploaded Image" */}
            {/*   /> */}
            {/* ) : ( */}
            {/*   <img */}
            {/*     className="rounded-circle" */}
            {/*     width={"200px"} */}
            {/*     height={"200px"} */}
            {/*     src={preview || `${SERVER_URL}/uploads/${existingImage}`} */}
            {/*     alt="uploaded Image" */}
            {/*   /> */}
            {/* )} */}
            <img
              className="rounded-circle"
              width={"200px"}
              height={"200px"}
              src={
                preview ||
                (existingImage && `${SERVER_URL}/uploads/${existingImage}`) ||
                uploadImage
              }
              alt="uploaded Image"
            />
          </label>
          <div className="mt-3">
            <input
              value={userData.github}
              onChange={(e) =>
                setUserData({ ...userData, github: e.target.value })
              }
              type="text"
              placeholder="Github URL"
              className="form-control"
            />
          </div>
          <div className="mt-3">
            <input
              value={userData.linkedin}
              onChange={(e) =>
                setUserData({ ...userData, linkedin: e.target.value })
              }
              type="text"
              placeholder="LinkedIn URL"
              className="form-control"
            />
          </div>
          <div className="mt-3 row">
            <button
              onClick={handleUpdateProfile}
              className="btn gradient-dark"
              style={{ color: "var(--bg-clr)" }}
            >
              Update
            </button>
          </div>
        </div>
      </Collapse>
    </>
  );
};
