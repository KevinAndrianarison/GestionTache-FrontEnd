import { createContext, useState } from "react";

export const ShowContext = createContext({
  showSpinner: false,
  showMainPage: true,
  showLogin: false,
});

export function ShowContextProvider({ children }) {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMainPage, setShowMainPage] = useState(true);

  return (
    <ShowContext.Provider
      value={{
        showSpinner,
        showLogin,
        showMainPage,
        setShowMainPage,
        setShowLogin,
        setShowSpinner,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
}
