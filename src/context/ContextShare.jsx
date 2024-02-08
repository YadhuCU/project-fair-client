import PropTypes from "prop-types";
import { createContext, useState } from "react";

ContextShare.propTypes = {
  children: PropTypes.element,
};

export const addProjectResponseContext = createContext();
export const editProjectResponseContext = createContext();

export function ContextShare({ children }) {
  const [addProjectResponse, setAddProjectResponse] = useState(null);
  const [editProjectResponse, setEditProjectResponse] = useState(null);

  return (
    <>
      <addProjectResponseContext.Provider
        value={{ addProjectResponse, setAddProjectResponse }}
      >
        <editProjectResponseContext.Provider
          value={{ editProjectResponse, setEditProjectResponse }}
        >
          {children}
        </editProjectResponseContext.Provider>
      </addProjectResponseContext.Provider>
    </>
  );
}
