import "../styles/MyprojectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faAnglesRight,
  faEdit,
  faTrash,
  faFolder,
  faCircleArrowDown,
  faCircleCheck,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { useState, useContext } from "react";
import { ShowContext } from "../contexte/useShow";

export default function MyprojectPage() {
  const { setShowDeleteTask, setShowSetProject, setShowSeretirer } =
    useContext(ShowContext);

  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  function setProject() {
    setShowSetProject(true);
  }

  function seRetirer() {
    setShowSeretirer(true);
  }

  function deleteProject() {
    setShowDeleteTask(true);
  }

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const projects = [
    {
      status: "Pris",
      assignedTo: "ANDRIANARISON Steeve Kevin",
      title: "Créer un App web",
      priority: "Urgent",
      dueDate: "20/01/2003",
    },
    {
      status: "Pris",
      assignedTo: "ANDRIANARISON Steeve Kevin",
      title: "Créer un App web",
      priority: "Urgent",
      dueDate: "20/01/2003",
    },
  ];

  return (
    <div className="myprojectPage" onClick={closeDropdown}>
      <h1 className="titreMyproject">
        <FontAwesomeIcon icon={faAnglesRight} className="w-8 h-5" />
        Mes projets
      </h1>
      <div className="contentMyproject mt-4">
        <h1 className="mycreate pl-5 pb-2 mt-2">
          <FontAwesomeIcon icon={faFolder} className="mr-2 w-6 h-4" />
          Les projets que vous avez créés :
        </h1>
        <div className="headMyProject">
          <li className="Statut">Statut</li>
          <li className="Pris">Pris par</li>
          <li className="Titres pl-2">Titre du projet</li>
          <li className="Priorite">Priorité</li>
          <li className="Date">Date limite</li>
          <li className="more mr-2"></li>
        </div>
        <div className="LISTE">
          {projects.map((project, index) => (
            <div className="BodyMyProject" key={index}>
              <li className="Statut">{project.status}</li>
              <li className="Pris">{project.assignedTo}</li>
              <li className="Titres pl-2">{project.title}</li>
              <li className="Priorite">{project.priority}</li>
              <li className="Date">{project.dueDate}</li>
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
                  <ul className="dropdown-menu absolute z-10 right-0 mt-2 py-1 w-32 bg-white shadow-lg rounded-md">
                    <li
                      onClick={setProject}
                      className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-blue-400 hover:text-white"
                    >
                      <FontAwesomeIcon icon={faEdit} className="mr-2" />
                      Modifier
                    </li>
                    <li
                      onClick={deleteProject}
                      className="dropdown-item flex items-center px-3 py-2 cursor-pointer hover:bg-blue-400 hover:text-white"
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
          Les projets que vous avez pris :
        </h1>
        <div className="headMyProject">
          <li className="Statuts">Statut</li>
          <li className="pl-2 Titres">Titre</li>
          <li className="Priorites">Priorité</li>
          <li className="Date">Date limite</li>
          <li className="fait text-center">Marqué comme fait</li>
          <li className="fait mr-3 text-center retirer">Se retirer</li>
        </div>
        <div className="LISTE">
          <div className="BodyMyProject">
            <li className="Statuts">Pris</li>
            <li className="pl-2 Titres">Créer un App web</li>
            <li className="Priorites">Urgent</li>
            <li className="Date">20/01/2003</li>
            <p className="fait text-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="iconeDone w-6 h-5"
              />
            </p>
            <p className="fait text-center">
              <FontAwesomeIcon
                icon={faUserSlash}
                className="retirerIcone w-6 h-5"
                onClick={seRetirer}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
