import "../styles/MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faUser,
  faPlusCircle,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import AllprojectPage from "./AllprojectPage";
import CreateprojectPage from "./CreateprojectPage";
import GestionUserPage from "./GestionUserPage";
import MyprojectPage from "./MyprojectPage";

import { Routes, Route, NavLink } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="mains">
      <div className="header">
        <div className="logos"></div>
        <div className="title mt-2">Gestion des projets</div>
        <div className="description mt-2">
          Bienvenue sur votre espace de gestion de projet, où chaque tâche
          trouve sa <b>solution</b> et chaque équipe atteint ses <b>objectifs</b> !
        </div>
      </div>
      <div className="body">
        <div className="navBar mt-4">
          <ul className="ulNavBar">
            <li className="mr-5 mt-2 pb-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "mr-2 border-b-4 border-yellow-500 pb-2"
                    : "mr-2 pb-2"
                }
              >
                <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
                Tous les projets
              </NavLink>
            </li>
            <li className="mr-5 mt-2 pb-2">
              <NavLink
                to="/MyProject"
                className={({ isActive }) =>
                  isActive
                    ? "mr-2 border-b-4 border-yellow-500 pb-2"
                    : "mr-2 pb-2"
                }
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Mes projets
              </NavLink>
            </li>
            <li className="mr-5 mt-2 pb-2">
              <NavLink
                to="/createProject"
                className={({ isActive }) =>
                  isActive
                    ? "mr-2 border-b-4 border-yellow-500 pb-2"
                    : "mr-2b pb-2"
                }
              >
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2 " />
                Créer un projet
              </NavLink>
            </li>
            <li className="mt-2 pb-2">
              <NavLink
                to="/AddUser"
                className={({ isActive }) =>
                  isActive
                    ? "mr-2 border-b-4 border-yellow-500 pb-2"
                    : "mr-2 pb-2"
                }
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Ajouter un nouveau membre
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Page mt-5">
          <Routes>
            <Route path="/" element={<AllprojectPage />} />
            <Route path="/MyProject" element={<MyprojectPage />} />
            <Route path="/createProject" element={<CreateprojectPage />} />
            <Route path="/AddUser" element={<GestionUserPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
