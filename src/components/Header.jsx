import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { tokenAuthenticationContext } from "../context/TokenAuth";

export const Header = ({ insideDashboard }) => {
  const navigate = useNavigate();
  const { setIsAuthorised } = useContext(tokenAuthenticationContext);

  const handleDelete = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    setIsAuthorised(false);
    navigate("/");
  };

  return (
    <div
      style={{ color: "var(--bg-clr-2)" }}
      className="gradient-dark  w-100 px-5 py-3 "
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "2.5rem",
          }}
          to={"/"}
        >
          <i
            style={{ overflow: "hidden" }}
            className="fa-brands fa-r-project"
          ></i>
          <span style={{ fontSize: "2.5rem" }}> Project Fair</span>
        </Link>
        {insideDashboard && (
          <div style={{ color: "var(--clr-bg-2)" }}>
            <button onClick={handleDelete} className="btn gradient-light">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
