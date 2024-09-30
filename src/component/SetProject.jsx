import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faXmark,
  faClock,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { ShowContext } from "../contexte/useShow";
import { useContext } from "react";

export default function SetProject() {
  const { setShowSetProject } = useContext(ShowContext);

  function closeCreateProject() {
    setShowSetProject(false);
  }

  return (
    <>
      <div className="showModal">
        <div className="formModalCreatePost">
          <div className="headCreateTask pb-4">
            <div className="icone">
              <FontAwesomeIcon
                icon={faSquarePlus}
                className="add faSquarePlus"
              />
            </div>
            <div className="titreTask">
              <input
                type="text"
                placeholder="Titre du projet"
                className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
            </div>
            <div className="close">
              <FontAwesomeIcon
                onClick={closeCreateProject}
                icon={faXmark}
                className="add"
              />
            </div>
          </div>
          <div className="section mt-10">
            <div className="label mr-5">
              <FontAwesomeIcon icon={faClock} className="w-5 h-5 mr-4" /> Date
              limite
            </div>
            <div className="Inputs mt-2">
              <input
                type="date"
                className="pl-3 w-52 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
            </div>
          </div>
          <div className="section mt-5">
            <div className="label mr-5">
              <FontAwesomeIcon icon={faFlag} className="w-5 h-5 mr-4" /> Niveau
              de priorité
            </div>
            <div className="Inputs mt-2">
              <select className="pl-3 w-52 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none">
                <option value="low">Basse</option>
                <option value="medium">Moyenne</option>
                <option value="high">Haute</option>
              </select>
            </div>
          </div>
          <div className="label mt-5">Description</div>

          <div className="section mt-5">
            <textarea className="pl-3 w-52 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none" />
          </div>
          <div className="mt-5">
            <button className="btnInviter">Modifier le projet</button>
          </div>
        </div>
      </div>
    </>
  );
}
