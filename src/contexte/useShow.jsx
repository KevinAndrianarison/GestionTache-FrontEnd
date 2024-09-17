import { createContext, useState } from "react";

export const ShowContext = createContext({
  showSpinner: false,
  showAdmin: false,
  showUser: false,
  showLogin: true,
});

export function ShowContextProvider({ children }) {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showUser, setShowUser] = useState(false);

  return (
    <ShowContext.Provider
      value={{
        showSpinner,
        showLogin,
        showAdmin,
        showUser,
        setShowAdmin,
        setShowLogin,
        setShowSpinner,
        setShowUser,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
}
