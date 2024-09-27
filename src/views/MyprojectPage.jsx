import "../styles/MyprojectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faAnglesRight,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { useState } from "react";

export default function MyprojectPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="myprojectPage" onClick={closeDropdown}>
        <h1 className="titreMyproject">
          <FontAwesomeIcon icon={faAnglesRight} className="w-8 h-5" />
          Mes projets
        </h1>
        <div className="contentMyproject mt-4">
          <div className="headMyProject">
            <li className="Statut">Statut</li>
            <li className="Pris">Pris par</li>
            <li className="Titres">Titre du projet</li>
            <li className="Priorite">Priorité</li>
            <li className="Date">Date limite</li>
            <li className="more mr-2"></li>
          </div>
          <div className="LISTE">
            <div className="BodyMyProject">
              <li className="Statut">Pris</li>
              <li className="Pris">ANDRIANARISON Steeve Kevin</li>
              <li className="Titres">Créer un App web</li>
              <li className="Priorite">Urgent</li>
              <li className="Date">20/01/2003</li>
              <li className="more relative">
                <Tippy content="Options">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="w-5 h-5 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown();
                    }}
                  />
                </Tippy>
                {showDropdown && (
                  <ul className="dropdown-menu absolute right-0 mt-2 py-1 w-32 bg-white shadow-lg rounded-md">
                    <li className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-blue-400 hover:text-white">
                      <FontAwesomeIcon icon={faEdit} className="mr-2" />
                      Modifier
                    </li>
                    <li className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-blue-400 hover:text-white">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="red-icon mr-2"
                      />
                      Supprimer
                    </li>
                  </ul>
                )}
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
