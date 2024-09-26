import "../styles/Modal.css";
import { ShowContext } from "../contexte/useShow";
import { useContext } from "react";

export default function DeleteUser() {
  const { setShowDeleteUser } = useContext(ShowContext);

  function closeDeluser() {
    setShowDeleteUser(false);
  }

  return (
    <>
      <div className="showModal">
        <div className="formModal">
          <h6 className="modal">Voulez-vous vraiment supprimer ce compte ?</h6>
          <div className="valider">
            <button type="button" className="SUPPR mt-5">
              OUI
            </button>
            <button
              type="button"
              onClick={closeDeluser}
              className="NON mt-5"
            >
              NON
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
