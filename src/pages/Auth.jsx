import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

Auth.propTypes = {
  insideRegister: PropTypes.bool,
};

function Auth({ insideRegister }) {
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex  justify-content-center align-items-center"
    >
      <div className="w-75 container">
        <Link
          to={"/home"}
          style={{
            fontSize: "1.25rem",
            color: "var(--text-clr)",
          }}
        >
          Back to Home
        </Link>
        <div
          style={{
            marginTop: "1rem",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "20px",
            color: "var(--bg-clr)",
          }}
          className="gradient-dark card p-5 "
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="w-full"
                src={
                  "https://cdni.iconscout.com/illustration/premium/thumb/authentication-code-4487189-3726252.png"
                }
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1>Project Fair</h1>
                <h5>
                  {insideRegister
                    ? "Sign Up to your Account"
                    : "Sign In to your Account"}
                </h5>
                <Form className="w-75 mt-3">
                  {insideRegister && (
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Control
                        style={{ border: "none", outline: "none" }}
                        type="text"
                        placeholder="Enter Username"
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      style={{ border: "none", outline: "none" }}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      style={{ border: "none", outline: "none" }}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  {insideRegister ? (
                    <div>
                      <button className="btn gradient-light">Register</button>
                      <p>
                        Already have an account? Click here to{" "}
                        <Link
                          style={{ color: "var(--bg-clr-2)" }}
                          to={"/login"}
                        >
                          Login
                        </Link>{" "}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <button className="btn gradient-light">Login</button>
                      <p>
                        New User? Click here to{" "}
                        <Link
                          style={{ color: "var(--bg-clr-2)" }}
                          to={"/register"}
                        >
                          Register
                        </Link>{" "}
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
