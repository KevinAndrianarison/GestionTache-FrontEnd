import "../styles/MyprojectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faAnglesRight,
  faEdit,
  faTrash,
  faFolder,
  faCircleArrowDown,
  faChartLine,
  faUserSlash,
  faInfoCircle,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { useState, useContext, useEffect } from "react";
import { ShowContext } from "../contexte/useShow";
import { ProjectContext } from "../contexte/useProject";

export default function MyprojectPage() {
  const { setShowDeleteTask, setShowSetProject, setShowSeretirer } =
    useContext(ShowContext);
  const {
    getProjectWhenCheforMembres,
    ListeProjectWhenChef,
    ListeProjectWhenMembres,
    setIdProject
  } = useContext(ProjectContext);

  const [activeDropdown, setActiveDropdown] = useState({
    type: "",
    index: null,
  });

  useEffect(() => {
    getProjectWhenCheforMembres();
  }, []);

  const toggleDropdown = (type, index) => {
    setActiveDropdown((prev) =>
      prev.type === type && prev.index === index
        ? { type: "", index: null }
        : { type, index }
    );
  };


  function setProject() {
    setShowSetProject(true);
  }

  function seRetirer() {
    setShowSeretirer(true);
  }

  function deleteProject(id) {
    setIdProject(id)
    setShowDeleteTask(true);
  }

  const closeDropdown = () => {
    setActiveDropdown({ type: "", index: null });
  };


  return (
    <div className="myprojectPage" onClick={closeDropdown}>
      <h1 className="titreMyproject">
        <FontAwesomeIcon icon={faAnglesRight} className="w-8 h-5" />
        Mes projets
      </h1>
      <div className="contentMyproject mt-4">
        <h1 className="mycreate pl-5 pb-2 mt-2">
          <FontAwesomeIcon icon={faFolder} className="mr-2 w-6 h-4" />
          Les projets dont vous êtes le chef :
        </h1>
        <div className="headMyProject">
          <li className="Pris ml-2">Créer par</li>
          <li className="Titres pl-2">Titre du projet</li>
          <li className="Priorites">Date de début</li>
          <li className="Dates">Date limite</li>
          <li className="more mr-2"></li>
        </div>
        <div className="LISTE">
          {ListeProjectWhenChef.map((project, index) => (
            <div className="BodyMyProject" key={index}>
              <li className="Pris ml-2">{project.chefs[0].nom}</li>
              <li className="Titres pl-2">{project.titre}</li>
              <li className="Priorites">{project.date_debut}</li>
              <li className="Dates">{project.date_fin}</li>
              <li className="more relative">
                <Tippy content="Options">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="w-5 h-5 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("chef", index);
                    }}
                  />
                </Tippy>
                {activeDropdown.type === "chef" &&
                  activeDropdown.index === index && (
                    <ul className="w-52 border dropdown-menu absolute z-20 right-0  py-1 bg-white shadow-lg rounded-md">
                      <li
                        onClick={setProject}
                        className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-blue-400 mr-2"
                        />
                        Modifier
                      </li>
                      <li className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-gray-200">
                        <FontAwesomeIcon
                          icon={faChartLine}
                          className="text-green-400 mr-2"
                        />
                        Progression
                      </li>
                      <li
                        className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => deleteProject(project.id)}

                      >
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
          ))}
        </div>

        <h1 className="mycreate pl-5 pb-2 mt-2">
          <FontAwesomeIcon icon={faCircleArrowDown} className="mr-2 w-6 h-4" />
          Les projets dont vous faites partie des membres :
        </h1>
        <div className="headMyProject">
          <li className="pl-2 Titres">Titre</li>
          <li className="Priorites">Date de début</li>
          <li className="Dates">Date limite</li>
          <li className="fait mr-3 text-center retirer">Se retirer</li>
          <li className="more mr-2"></li>
        </div>
        <div className="LISTE">
          {ListeProjectWhenMembres.map((projet, index) => (
            <div className="BodyMyProject" key={index}>
              <li className="pl-2 Titres">{projet.titre}</li>
              <li className="Priorites">{projet.date_debut}</li>
              <li className="Dates">{projet.date_fin}</li>
              <p className="fait text-center">
                <FontAwesomeIcon
                  icon={faUserSlash}
                  className="retirerIcone w-6 h-5"
                  onClick={seRetirer}
                />
              </p>
              <li className="more relative">
                <Tippy content="Options">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="w-5 h-5 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("membre", index);
                    }}
                  />
                </Tippy>
                {activeDropdown.type === "membre" &&
                  activeDropdown.index === index && (
                    <ul className="border dropdown-menu absolute z-10 right-0  py-1 w-52 bg-white shadow-lg rounded-md">
                      <li
                        onClick={setProject}
                        className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        <FontAwesomeIcon
                          icon={faThumbtack}
                          className="text-yellow-400 mr-2"
                        />
                        Mes tâches
                      </li>

                      <li className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-gray-200 ">
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="text-blue-400 mr-2 "
                        />
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
  );
}
