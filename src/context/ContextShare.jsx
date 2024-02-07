import PropTypes from "prop-types";
import { createContext, useState } from "react";

ContextShare.propTypes = {
  children: PropTypes.element,
};

export const addProjectResponseContext = createContext();

export function ContextShare({ children }) {
  const [addProjectResponse, setAddProjectResponse] = useState(null);

  return (
    <>
      <addProjectResponseContext.Provider
        value={{ addProjectResponse, setAddProjectResponse }}
      >
        {children}
      </addProjectResponseContext.Provider>
    </>
  );
}
