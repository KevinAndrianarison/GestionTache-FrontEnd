import "./App.css";
import { LoginPage } from "./LoginPage";
import Overlay from "./component/Overlay";
import { ShowContext } from "./contexte/useShow";
import { useContext, useEffect } from "react";
import MainPage from "./views/MainPage";
import AlertComponent from "./component/AlertComponent";
import ConfirmCode from "./component/ConfirmCode";

function App() {
  const {
    showSpinner,
    showLoginPage,
    showConfirmMdp,
    showMainPage,
    setShowMainPage,
    setShowLoginPage,
  } = useContext(ShowContext);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    if (user) {
      setShowMainPage(true);
      setShowLoginPage(false);
    }
  }, []);

  return (
    <div className="app">
      {showLoginPage && <LoginPage />}
      {showSpinner && <Overlay />}
      {showMainPage && <MainPage />}
      {showConfirmMdp && <ConfirmCode />}
      <AlertComponent />
    </div>
  );
}

export default App;
