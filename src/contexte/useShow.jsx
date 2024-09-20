import { createContext, useState } from "react";

export const ShowContext = createContext({
  showSpinner: false,
  showMainPage: false,
  showLoginPage: true,
  showLoginComponent: true,
  showSignUpComponent: false,
});

export function ShowContextProvider({ children }) {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [showLoginComponent, setShowLoginComponent] = useState(true);
  const [showSignUpComponent, setShowSignUpComponent] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);

  return (
    <ShowContext.Provider
      value={{
        showSpinner,
        showLoginPage,
        showMainPage,
        showLoginComponent,
        showSignUpComponent,
        setShowLoginComponent,
        setShowMainPage,
        setShowLoginPage,
        setShowSpinner,
        setShowSignUpComponent
      }}
    >
      {children}
    </ShowContext.Provider>
  );
}
