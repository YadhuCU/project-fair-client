import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Auth from "./pages/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/register"} element={<Auth insideRegister />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/*"} element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
