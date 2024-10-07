import "../styles/MyprojectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShowContext } from "../contexte/useShow";
import { useContext, useEffect, useState } from "react";
import {
  faEllipsis,
  faAnglesRight,
  faCircleArrowDown,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import axios from "axios";
import { UrlContext } from "../contexte/useUrl";
import { ProjectContext } from "../contexte/useProject";

export default function AllprojectPage() {
  const [activeDropdown, setActiveDropdown] = useState(null); 

  const { setShowDetails } = useContext(ShowContext);
  const { url } = useContext(UrlContext);
  const { getAllproject, ListeProject } = useContext(ProjectContext);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  function showDetails() {
    setShowDetails(true);
  }

  useEffect(() => {
    getAllproject();
  }, []);

  const closeDropdown = () => {
    setActiveDropdown(null); 
  };

  return (
    <>
      <div className="myprojectPage" onClick={closeDropdown}>
        <h1 className="titreMyproject">
          <FontAwesomeIcon icon={faAnglesRight} className="w-8 h-5" />
          Tous les projets
        </h1>
        <div className="contentMyproject mt-4">
          <div className="headMyProject">
            <li className="Pris ml-2">Pris par</li>
            <li className="Titres">Titre du projet</li>
            <li className="Priorite">Date début</li>
            <li className="Date">Date limite</li>
            <li className="more mr-2"></li>
          </div>
          <div className="LISTES">
            {ListeProject.map((list, index) => (
              <div key={list.id} className="BodyProject">
                <li className="Pris ml-2">{list.chefs[0].nom}</li>
                <li className="Titres">{list.titre}</li>
                <li className="Priorite">{list.date_debut}</li>
                <li className="Date">{list.date_fin}</li>
                <li className="more relative">
                  <Tippy content="Options">
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="w-5 h-5 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(index); 
                      }}
                    />
                  </Tippy>
                  {activeDropdown === index && ( 
                    <ul className="border z-10 dropdown-menu absolute right-0 mt-2 py-1 w-32 bg-white shadow-lg rounded-md">
                      <li className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-blue-400 hover:text-white">
                        <FontAwesomeIcon
                          icon={faCircleArrowDown}
                          className="mr-2"
                        />
                        Prendre
                      </li>
                      <li
                        onClick={showDetails}
                        className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-blue-400 hover:text-white"
                      >
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                        Détails
                      </li>
                    </ul>
                  )}
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
