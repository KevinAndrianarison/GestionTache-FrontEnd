import "./App.css";
import { LoginPage } from "./LoginPage";
import Overlay from "./component/Overlay";
import { ShowContext } from "./contexte/useShow";
import { useContext } from "react";
import UserMainPage from "./views/UserMainPage";
import AdminMainPage from "./views/AdminMainPage";

function App() {
  const { showSpinner, showLogin, showAdmin, showUser } =
    useContext(ShowContext);

  return (
    <div class="app">
      {showLogin && <LoginPage />}
      {showSpinner && <Overlay />}
      {showUser && <UserMainPage />}
      {showAdmin && <AdminMainPage />}
    </div>
  );
}

export default App;
