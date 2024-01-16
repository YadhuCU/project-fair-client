import { Header } from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { MyProjects } from "../components/MyProjects";
import { Profile } from "../components/Profile";

function Dashboard() {
  return (
    <>
      <Header insideDashboard />
      <div className="conatiner w-80 mx-auto mt-5 px-5">
        <h1 className="fw-bolder">Welcome User</h1>
        <Row className="mt-5">
          <Col lg={8}>
            <MyProjects />
          </Col>
          <Col lg={4}>
            <Profile />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
