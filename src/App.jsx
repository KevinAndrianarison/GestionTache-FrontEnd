import "./App.css";
import { LoginPage } from "./LoginPage";
import Overlay from "./component/Overlay";
import { ShowContext } from "./contexte/useShow";
import { useContext } from "react";
import MainPage from "./views/MainPage";

function App() {
  const { showSpinner, showLogin, showMainPage } =
    useContext(ShowContext);

  return (
    <div className="app">
      {showLogin && <LoginPage />}
      {showSpinner && <Overlay />}
      {showMainPage && <MainPage />}
    </div>
  );
}

export default App;
