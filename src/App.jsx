import "./App.css";
import { LoginPage } from "./LoginPage";
import Overlay from "./component/Overlay";
import { ShowContext } from "./contexte/useShow";
import { useContext, useEffect } from "react";
import MainPage from "./views/MainPage";
import AlertComponent from "./component/AlertComponent";
import ConfirmCode from "./component/ConfirmCode";
import LogoutComponent from "./component/LogoutComponent";
import DeleteUser from "./component/DeleteUser";
import CreateProject from "./component/CreateProject";
import DeleteProject from "./component/DeleteProject";
import SetProject from "./component/SetProject";
import SeRetirer from "./component/SeRetirer";
import DetailsProject from "./component/DetailsProjet";

function App() {
  const {
    showSpinner,
    showLoginPage,
    showConfirmMdp,
    showMainPage,
    setShowMainPage,
    setShowLoginPage,
    showLogout,
    showDeleteUser,
    showcreateTask,
    showDeleteTask,
    showSetProject,
    showDetails,
    showSeretirer,
    setShowAdmin,
  } = useContext(ShowContext);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    if (token) {
      // setShowAdmin(true);
      setShowMainPage(true);
      setShowLoginPage(false);
    } else {
      setShowMainPage(false);
      setShowLoginPage(true);
    }
  }, []);

  return (
    <div className="app">
      {showLoginPage && <LoginPage />}
      {showSpinner && <Overlay />}
      {showMainPage && <MainPage />}
      {showConfirmMdp && <ConfirmCode />}
      {showLogout && <LogoutComponent />}
      {showDeleteUser && <DeleteUser />}
      {showcreateTask && <CreateProject />}
      {showDeleteTask && <DeleteProject />}
      {showSetProject && <SetProject />}
      {showSeretirer && <SeRetirer />}
      {showDetails && <DetailsProject />}

      <AlertComponent />
    </div>
  );
}

export default App;
