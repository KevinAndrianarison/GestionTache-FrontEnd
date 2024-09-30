import { createContext, useState } from "react";

export const ShowContext = createContext({
  showSpinner: false,
  showMainPage: false,
  showLoginPage: false,
  showLoginComponent: true,
  showSignUpComponent: false,
  showConfirmMdp: false,
  showLogout: false,
  showDeleteUser: false,
  showcreateTask: false,
  showDeleteTask: false,
  showSetProject: false,
  showSeretirer: false,
  showDetails: false,



});

export function ShowContextProvider({ children }) {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showLoginComponent, setShowLoginComponent] = useState(false);
  const [showSignUpComponent, setShowSignUpComponent] = useState(false);
  const [showMainPage, setShowMainPage] = useState(true);
  const [showConfirmMdp, setShowConfirmMdp] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showcreateTask, setShowcreateTask] = useState(false);
  const [showDeleteTask, setShowDeleteTask] = useState(false);
  const [showSetProject, setShowSetProject] = useState(false);
  const [showSeretirer, setShowSeretirer] = useState(false);
  const [showDetails, setShowDetails] = useState(false);




  return (
    <ShowContext.Provider
      value={{
        showSpinner,
        showLoginPage,
        showMainPage,
        showLoginComponent,
        showSignUpComponent,
        showConfirmMdp,
        showLogout,
        showDeleteUser,
        showcreateTask,
        showDeleteTask,
        showSetProject,
        showSeretirer,
        showDetails,
        setShowLoginComponent,
        setShowcreateTask,
        setShowConfirmMdp,
        setShowMainPage,
        setShowLoginPage,
        setShowSpinner,
        setShowSignUpComponent,
        setShowLogout,
        setShowDeleteUser,
        setShowDeleteTask,
        setShowSetProject,
        setShowSeretirer,
        setShowDetails
      }}
    >
      {children}
    </ShowContext.Provider>
  );
}
