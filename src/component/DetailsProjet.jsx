import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Details.module.css";
import { ShowContext } from "../contexte/useShow";
import { useContext } from "react";
import { ProjectContext } from "../contexte/useProject";

export default function DetailsProject() {
  const { setShowDetails } = useContext(ShowContext);
  const { oneProject } = useContext(ProjectContext);

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
            Détails du projet
          </h2>
          <p className="mt-5">
            <strong>Titre :</strong> {oneProject.titre}
          </p>
          <p className="mt-2">
            <strong>Description :</strong> {oneProject.description}
          </p>
          <div className="mt-2">
            <strong>Chefs de projet : </strong>
            {oneProject.chefs.length !== 0 && (
              <ul>
                {oneProject.chefs.map((list) => (
                  <li key={list.id}>- {list.nom}</li>
                ))}
              </ul>
            )}
            {oneProject.chefs.length === 0 && "Aucun"}
          </div>
          <p className="mt-2">
            <strong>Début :</strong> {oneProject.date_debut}
          </p>
          <p className="mt-2">
            <strong>Fin :</strong> {oneProject.date_fin}
          </p>
          <div className="mt-2">
            <strong>Membres : </strong>
            {oneProject.membres.length !== 0 && (
              <ul>
                {oneProject.membres.map((list) => (
                  <li key={list.id}>- {list.nom}</li>
                ))}
              </ul>
            )}
            {oneProject.membres.length === 0 && "Aucun"}
          </div>
        </div>
      </div>
    </>
  );
}
