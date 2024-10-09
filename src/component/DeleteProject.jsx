import "../styles/Modal.css";
import { ShowContext } from "../contexte/useShow";
import { useContext } from "react";
import { ProjectContext } from "../contexte/useProject";
import { MessageContext } from "../contexte/useMessage";
import { UrlContext } from "../contexte/useUrl";
import axios from "axios";

export default function DeleteProject() {
  const { setShowDeleteTask, setShowSpinner } = useContext(ShowContext);
  const { idProject, getProjectWhenCheforMembres } = useContext(ProjectContext);
  const { url } = useContext(UrlContext);
  const { setMessageSucces, setMessageError } = useContext(MessageContext);

  function closeDelProject() {
    setShowDeleteTask(false);
  }

  function deleteProject() {
    setShowSpinner(true);
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    axios
      .delete(`${url}/api/entreprises/projets/${idProject}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getProjectWhenCheforMembres();
        setMessageSucces(response.data.message);
        setShowSpinner(false);
        setShowDeleteTask(false);
        setTimeout(() => {
          setMessageSucces("");
        }, 5000);
      })
      .catch((err) => {
        console.error(err);
        setShowSpinner(false);
      });
  }

  return (
    <>
      <div className="showModal">
        <div className="formModal">
          <h6 className="modal">Voulez-vous vraiment supprimer ce projet ?</h6>
          <div className="valider">
            <button
              onClick={deleteProject}
              type="button"
              className="SUPPR mt-5"
            >
              OUI
            </button>
            <button
              type="button"
              onClick={closeDelProject}
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
