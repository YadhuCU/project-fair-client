import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Auth from "./pages/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { tokenAuthenticationContext } from "./context/TokenAuth";

function App() {
  const { isAuthorised } = useContext(tokenAuthenticationContext);

  return (
    <>
      <Routes>
        <Route path={"/"} element={isAuthorised ? <Home /> : <Auth />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/register"} element={<Auth insideRegister />} />
        <Route
          path={"/dashboard"}
          element={isAuthorised ? <Dashboard /> : <Auth />}
        />
        <Route
          path={"/projects"}
          element={isAuthorised ? <Projects /> : <Auth />}
        />
        <Route path={"/*"} element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
