import "../styles/MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faUser,
  faPlusCircle,
  faUserPlus,
  faSignOutAlt,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import AllprojectPage from "./AllprojectPage";
import GestionUserPage from "./GestionUserPage";
import { GestionEntity } from "./GestionEntity";
import MyProfil from "./MyProfil";
import MyprojectPage from "./MyprojectPage";
import { Routes, Route, NavLink } from "react-router-dom";
import { ShowContext } from "../contexte/useShow";
import { useContext } from "react";
import Tippy from "@tippyjs/react";

export default function MainPage() {
  const entityString = localStorage.getItem("entity");
  let entity = JSON.parse(entityString);

  const { setShowLogout, setShowcreateTask, showUser, showAdmin } =
    useContext(ShowContext);

  function logout() {
    setShowLogout(true);
  }

  function createProject() {
    setShowcreateTask(true);
  }

  return (
    <div className="mains">
      <div className="header">
        <div className="logos"></div>
        {(showAdmin || showUser) && (
          <>
            <Tippy content="Créer un projet">
              <FontAwesomeIcon
                onClick={createProject}
                icon={faPlusCircle}
                className="creates  w-8 h-8"
              />
            </Tippy>
            <NavLink to={`${entity}/Settings`}>
              <Tippy content="Paramètres">
                <FontAwesomeIcon icon={faGear} className="settings  w-8 h-8" />
              </Tippy>
            </NavLink>
          </>
        )}

        <FontAwesomeIcon
          onClick={logout}
          icon={faSignOutAlt}
          className=" faSignOutAlt w-8 h-8"
        />
        <div className="title mt-2">Gestion des projets</div>
        {(showAdmin || showUser) && (
          <div className="description mt-2">
            Bienvenue sur votre espace de gestion de projet, où chaque tâche
            trouve sa <b>solution</b> et chaque équipe atteint ses{" "}
            <b> objectifs</b> !
          </div>
        )}
      </div>
      <div className="body">
        {(showAdmin || showUser) && (
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
                  to={`${entity}/MyProject`}
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
              {showAdmin && (
                <li className="mt-2 pb-2">
                  <NavLink
                    to={`${entity}/AddUser`}
                    className={({ isActive }) =>
                      isActive
                        ? "mr-2 border-b-4 border-yellow-500 pb-2"
                        : "mr-2 pb-2"
                    }
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    Ajouter un nouveau employé
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        )}
        <div className="Page mt-5">
          <Routes>
            {(showAdmin || showUser) && (
              <>
                <Route path="/" element={<AllprojectPage />} />
                <Route path=":entity/MyProject" element={<MyprojectPage />} />
                {showAdmin && (
                  <Route path=":entity/AddUser" element={<GestionUserPage />} />
                )}
                <Route path=":entity/Settings" element={<MyProfil />} />
              </>
            )}
            <Route path="/gestionEntity" element={<GestionEntity />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
