import "./App.css";
import { LoginPage } from "./LoginPage";
import Overlay from "./component/Overlay";
import { ShowContext } from "./contexte/useShow";
import { useContext } from "react";
import MainPage from "./views/MainPage";
import AlertComponent from "./component/AlertComponent";

function App() {
  const { showSpinner, showLoginPage, showMainPage } = useContext(ShowContext);

  return (
    <div className="app">
      {showLoginPage && <LoginPage />}
      {showSpinner && <Overlay />}
      {showMainPage && <MainPage />}
      <AlertComponent />
    </div>
  );
}

export default App;
