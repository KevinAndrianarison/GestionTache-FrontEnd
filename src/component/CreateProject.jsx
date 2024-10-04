import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faXmark,
  faClock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ShowContext } from "../contexte/useShow";
import { useContext, useState } from "react";
import { UserContext } from "../contexte/useUser";

export default function CreateProject() {
  const { setShowcreateTask } = useContext(ShowContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { ListeUser } = useContext(UserContext);

  function closeCreateProject() {
    setShowcreateTask(false);
  }

  const filteredOptions = ListeUser.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearchTerm(value);
    setIsDropdownOpen(value !== "");
  }

  function handleOptionSelect(option) {
    if (!selectedMembers.includes(option)) {
      setSelectedMembers([...selectedMembers, option]);
    }
    setSearchTerm("");
    setIsDropdownOpen(false);
  }

  function handleRemoveMember(member) {
    setSelectedMembers(selectedMembers.filter((m) => m !== member));
  }

  return (
    <>
      <div className="showModal">
        <div className="formModalCreatePost">
          <div className="headCreateTask pb-4">
            <div className="icone">
              <FontAwesomeIcon
                icon={faSquarePlus}
                className="add h-7 w-7 faSquarePlus"
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
                className="h-7 w-7 ml-5 add cursor-pointer transition duration-200 ease-in-out hover:text-gray-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="section mt-5">
            <div className="dateInputs flex flex-wrap justify-between">
              <div className="inputGroup mr-4 w-60 mt-5">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
                  Date de début
                </label>
                <input
                  type="date"
                  className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
              </div>

              <div className="inputGroup w-60 mt-5">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
                  Date de fin
                </label>
                <input
                  type="date"
                  className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="label mt-5">Description :</div>

          <div className="section mt-2">
            <textarea className="pl-3 w-52 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none" />
          </div>

          <div className="section mt-5 flex items-center">
            <div className="relative w-full">
              <div className="label">Ajouter des membres :</div>

              <div className="flex mt-2 items-center relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-3 pr-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute right-3 text-gray-400 cursor-pointer transition duration-200 hover:text-[rgba(0, 184, 148,1.0)] hover:scale-125"
                  onClick={() => handleOptionSelect(searchTerm)}
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((user, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200"
                        onClick={() => handleOptionSelect(user.email)}
                      >
                        {user.email}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-500">
                      Aucune option disponible
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {selectedMembers.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {selectedMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-200 rounded-full px-3 py-1"
                >
                  {member}
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="ml-2 cursor-pointer text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveMember(member)}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-5">
            <button className="btnInviter">Créer un projet</button>
          </div>
        </div>
      </div>
    </>
  );
}
