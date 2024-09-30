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
import { UrlContext } from "./contexte/useUrl";
import DeleteProject from "./component/DeleteProject";
import SetProject from "./component/SetProject";
import SeRetirer from "./component/SeRetirer";
import DetailsProject from "./component/DetailsProjet";
import axios from "axios";

function App() {
  const { url } = useContext(UrlContext);

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
    showSeretirer
  } = useContext(ShowContext);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    if (user) {
      setShowMainPage(true);
      setShowLoginPage(false);
    }
    axios
      .get(`${url}/projet-dev/app/checksession.php`, {
        withCredentials: true,
      })
      .then((response) => {})
      .catch((err) => {
        console.error(err);
      });
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
