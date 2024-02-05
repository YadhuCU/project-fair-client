import { Link } from "react-router-dom";
import landingImage from "../assets/project-img.png";
import { ProjectCard } from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getHomeProjectAPI } from "../services/allAPIs";

function Home() {
  const navigate = useNavigate();
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [homeProject, setHomeProject] = useState([]);

  useEffect(() => {
    getHomeProjects();

    if (sessionStorage.getItem("token")) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  }, []);

  const getHomeProjects = async () => {
    const result = await getHomeProjectAPI();
    if (result.status === 200) {
      setHomeProject(result.data);
    } else {
      console.log(result);
    }
  };

  const handleProjectPage = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/projects");
    } else {
      toast.warning("Please Log in to explore our projects.");
    }
  };

  return (
    <>
      {/* landing page */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "transparent",
          color: "var(--text-clr)",
        }}
      >
        <div
          className="row"
          style={{
            height: "100%",
            placeItems: "center",
          }}
        >
          <div
            className="col-lg-6"
            style={{
              paddingInline: "2rem",
              fontSize: "1.2rem",
            }}
          >
            <h1
              style={{ fontSize: "8rem", fontWeight: "700" }}
              className="text-center"
            >
              Project Fair
            </h1>
            <p className="text-center">
              One stop desitnation for all Software Development Projects. Where
              people can Add Mange their Project. As well as access all projects
              available in our webiste... What are you waiting for..!!!
            </p>
            <div className="d-flex justify-content-center">
              {isLogedIn ? (
                <Link
                  className="btn gradient-dark"
                  style={{
                    fontSize: "1.2rem",
                    // backgroundColor: "var(--text-clr)",
                    color: "var(--bg-clr)",
                    fontWeight: "700",
                  }}
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  className="btn gradient-dark"
                  style={{
                    fontSize: "1.2rem",
                    // backgroundColor: "var(--text-clr)",
                    color: "var(--bg-clr)",
                    fontWeight: "700",
                  }}
                  to={"/login"}
                >
                  Start to Explore
                </Link>
              )}
            </div>
          </div>
          <div className="col-lg-6 align-items-center">
            <img style={{ width: "100%" }} src={landingImage} />
          </div>
        </div>
      </div>
      {/* all project */}
      <div className="mt-5">
        <h1 className="text-center mb-5">Explore our project</h1>
        <marquee>
          <div className="d-flex justify-content-center">
            {homeProject?.length > 0 &&
              homeProject.map((item, index) => (
                <div key={index} className="me-5">
                  <ProjectCard project={item} />
                </div>
              ))}
          </div>
        </marquee>
        <div className="text-center">
          <button
            onClick={handleProjectPage}
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              color: "var(--text-clr)",
            }}
            className="btn btn-link"
          >
            Explore more
          </button>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default Home;
