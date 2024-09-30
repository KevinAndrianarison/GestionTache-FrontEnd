import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Details.module.css";
import { ShowContext } from "../contexte/useShow";
import { useContext } from "react";

export default function DetailsProject() {
  const { setShowDetails } = useContext(ShowContext);

  function onClose() {
    setShowDetails(false);
  }

  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className={styles.titre}>
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            Détails de la tâche
          </h2>
          <p className="mt-5">
            <strong>Titre :</strong> A
          </p>
          <p className="mt-2">
            <strong>Description :</strong> B
          </p>
          <p className="mt-2">
            <strong>Priorité :</strong> C
          </p>
          <p className="mt-2">
            <strong>Date limite :</strong> 10/11/2022
          </p>
        </div>
      </div>
    </>
  );
}
