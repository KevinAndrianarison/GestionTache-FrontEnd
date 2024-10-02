import "../styles/GestionEntity.css";
import {
  faTrash,
  faPlus,
  faBarsProgress,
  faListUl,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UrlContext } from "../contexte/useUrl";
import { MessageContext } from "../contexte/useMessage";

export function GestionEntity() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      companyName: "Societe A",
      adminName: "Admin A",
      email: "adminA@example.com",
    },
  ]);
  const [email, setEmail] = useState("");
  const [nomSociete, setNomSociete] = useState("");
  const [nomAdmin, setNomAdmin] = useState("");

  const { setMessageSucces, setMessageError } = useContext(MessageContext);
  const { url } = useContext(UrlContext);

  function createSociete() {
    console.log(email, nomSociete, nomAdmin);
  }

  return (
    <div className="mainSuperAdmin">
      <div>
        <h1 className="text-3xl font-bold text-left">
          <FontAwesomeIcon icon={faBarsProgress} className="mr-4" />
          Gestion des sociétés
        </h1>

        <div className="flexsuper">
          <div className="left p-6 rounded-lg border shadow-lg mt-10">
            <h2 className="text-xl font-semibold  mb-4">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Ajouter une société
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1">
                  Nom de la société
                </label>
                <input
                  type="text"
                  value={nomSociete}
                  onChange={(e) => setNomSociete(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Nom complet de la société"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Nom de l'admin</label>
                <input
                  type="text"
                  value={nomAdmin}
                  onChange={(e) => setNomAdmin(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Nom de l'administrateur"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Adresse email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="admin@example.com"
                />
              </div>
              <button
                onClick={createSociete}
                className="w-52 bg-blue-500 text-white py-2 rounded-md duration-300"
              >
                <FontAwesomeIcon icon={faCheckDouble} className="mr-2" />
                Ajouter
              </button>
            </form>
          </div>

          <div className="right mt-10 p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              <FontAwesomeIcon icon={faListUl} className="mr-2" />
              Liste des sociétés
            </h2>
            <div className="pl-5 listeSociete pt-2 border pb-2  text-sm font-bold">
              <li className="nomSociete">Société</li>
              <li className="nomAdmin">Admin</li>
              <li className="AdresseEmail">Email</li>
              <li className="trash mr-3"></li>
            </div>
            <div className="contentListSociete text-sm">
              <div className="pl-5 pt-2 border  pb-2 listeSociete">
                <li className="nomSociete">Nom de la société</li>
                <li className="nomAdmin">Nom de l'admin</li>
                <li className="AdresseEmail">Adresse email</li>
                <li className="trash">
                  <FontAwesomeIcon icon={faTrash} className="faTrash mr-2" />
                </li>
              </div>
              <div className="pl-5 pt-2 border  pb-2 listeSociete">
                <li className="nomSociete">Nom de la société</li>
                <li className="nomAdmin">Nom de l'admin</li>
                <li className="AdresseEmail">Adresse email</li>
                <li className="trash">
                  <FontAwesomeIcon icon={faTrash} className="faTrash mr-2" />
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
