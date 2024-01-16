import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      style={{
        marginTop: "15rem",
        // backgroundColor: "var(--text-clr)",
        color: "var(--bg-clr)",
      }}
      className="gradient-dark py-5"
    >
      <div className="container w-100 my-3 ">
        <div className="footer-content d-flex justify-content-between">
          <div className="title d-flex flex-column">
            <h3>
              <i className="fa-brands fa-r-project"></i>
              <span className="mx-3">Project Fair</span>
            </h3>
            <p style={{ maxWidth: "32ch" }}>
              Designed and build with all the love in the world by the Bootstrap
              team with help of our contributers.
            </p>
            <p>Code licenced by MIT, docs CC By 3.0,</p>
            <p>Currently v5.3.2</p>
          </div>
          <div className="links d-flex flex-column">
            <h3>Links</h3>
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "var(--bg-clr)" }}
              className=""
            >
              Home
            </Link>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "var(--bg-clr)" }}
              className=""
            >
              Login
            </Link>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "var(--bg-clr)" }}
              className=""
            >
              Register
            </Link>
          </div>
          <div className="guides  d-flex flex-column">
            <h3 className="">Guides</h3>
            <a
              className=""
              href="https://react.dev/"
              target="_blank"
              style={{ textDecoration: "none", color: "var(--bg-clr)" }}
              rel="noreferrer"
            >
              React
            </a>
            <a
              className=""
              href="https://react-bootstrap.netlify.app/"
              target="_blank"
              style={{ textDecoration: "none", color: "var(--bg-clr)" }}
              rel="noreferrer"
            >
              React Bootstrap
            </a>
            <a
              className=""
              href="https://www.w3schools.com/react/react_router.asp"
              target="_blank"
              style={{ textDecoration: "none", color: "var(--bg-clr)" }}
              rel="noreferrer"
            >
              React Routing
            </a>
          </div>
          <div className="contact d-flex flex-column">
            <h3 className="">Contact Us</h3>
            <Form>
              <InputGroup>
                <Form.Control
                  style={{ backgroundColor: "var(--bg-clr)" }}
                  type="email"
                  placeholder="Enter your Email"
                />
                <Button type="submit" variant="secondary">
                  <i className="fa-solid fa-arrow-right" />
                </Button>
              </InputGroup>
            </Form>
            <div
              style={{ width: "100%", fontSize: "1.8rem" }}
              className="d-flex justify-content-between my-3"
            >
              <a
                style={{ color: "var(--clr-bg)" }}
                target="_blank"
                href="https://mail.google.com"
                rel="noreferrer"
              >
                <i className="fa-solid fa-envelope" />
              </a>
              <a
                target="_blank"
                style={{ color: "var(--clr-bg)" }}
                href="https://twitter.com"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                target="_blank"
                style={{ color: "var(--clr-bg)" }}
                href="https://instagram.com"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                target="_blank"
                style={{ color: "var(--clr-bg)" }}
                href="https://facebook.com"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                target="_blank"
                style={{ color: "var(--clr-bg)" }}
                href="https://github.com"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                target="_blank"
                style={{ color: "var(--clr-bg)" }}
                href="https://in.linkedin.com"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <p className="">
          Copyrights &copy; 2023 Project Fair build with React.
        </p>
      </div>
    </div>
  );
};
