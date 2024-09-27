import "../styles/MyprojectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

export default function MyprojectPage() {
  return (
    <>
      <div className="myprojectPage">
        <h1 className="titreMyproject">
          <FontAwesomeIcon icon={faAnglesRight} className="  w-8 h-5" />
          Mes projets
        </h1>
        <div className="contentMyproject mt-4">
          <div className="headMyProject">
            <li className="Statut">Statut</li>
            <li className="Pris">Pris par</li>
            <li className="Titres">Titre du projet</li>
            <li className="Priorite">Priorité</li>
            <li className="Date">Date limite</li>
            <li className="more mr-2">
              
            </li>
          </div>
          <div className="LISTE">
            <div className="BodyMyProject">
              <li className="Statut">Pris</li>
              <li className="Pris">ANDRIANARISON Steeve Kevin</li>
              <li className="Titres">Créer un App web</li>
              <li className="Priorite">Urgent</li>
              <li className="Date">20/01/2003</li>
              <li className="more">
                <Tippy content="Modifier">
                  <FontAwesomeIcon icon={faEllipsis} className="  w-5 h-5" />
                </Tippy>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
