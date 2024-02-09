import { createContext } from "react";
import { useEffect, useState } from "react";

export const tokenAuthenticationContext = createContext();

export function TokenAuth({ children }) {
  const [isAuthorised, setIsAuthorised] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuthorised(true);
    } else {
      setIsAuthorised(false);
    }
  }, [isAuthorised]);
  return (
    <>
      <tokenAuthenticationContext.Provider
        value={{ isAuthorised, setIsAuthorised }}
      >
        {children}
      </tokenAuthenticationContext.Provider>
    </>
  );
}
