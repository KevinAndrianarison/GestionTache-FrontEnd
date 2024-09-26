import "../styles/Modal.css";
import { ShowContext } from "../contexte/useShow";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutComponent() {
  const {
    setShowLogout,
    setShowLoginPage,
    setShowLoginComponent,
    setShowMainPage,
  } = useContext(ShowContext);
  const navigate = useNavigate();

  function closeLogout() {
    setShowLogout(false);
  }

  function logout() {
    localStorage.removeItem("user");
    setShowLogout(false);
    setShowMainPage(false);
    setShowLoginComponent(true);
    setShowLoginPage(true);
    navigate("/");
  }

  return (
    <>
      <div className="showModal">
        <div className="formModal">
          <h6 className="modal">Voulez-vous vraiment quitter ?</h6>
          <div className="valider">
            <button onClick={logout} className="OUI mt-5">
              OUI
            </button>
            <button onClick={closeLogout} className="NON mt-5">
              NON
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
