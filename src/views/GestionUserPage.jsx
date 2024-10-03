import { useContext, useState } from "react";
import "../styles/GestionUserPage.css";
import { faTrash, faList, faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShowContext } from "../contexte/useShow";
import { UrlContext } from "../contexte/useUrl";
import { MessageContext } from "../contexte/useMessage";

import axios from "axios";

export default function GestionUserPage() {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [showMessageErrorEmail, setShowMessageErrorEmail] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showGrid, setShowGrid] = useState(true);

  const { setShowDeleteUser, setShowSpinner } = useContext(ShowContext);
  const { url } = useContext(UrlContext);
  const { setMessageSucces, setMessageError } = useContext(MessageContext);

  function switchToGrid() {
    setShowList(false);
    setShowGrid(true);
  }

  function deleteuser() {
    setShowDeleteUser(true);
  }

  function switchToList() {
    setShowGrid(false);
    setShowList(true);
  }

  function inviterMembre() {
    setShowSpinner(true);
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    let formData = {
      nom: nom,
      email: email,
      entreprise_id: user.entreprise_id,
    };
    axios
      .post(`${url}/api/invitation`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMessageSucces(response.data.message);
        setEmail("");
        setNom("");
        setShowSpinner(false);
        setTimeout(() => {
          setMessageSucces("");
        }, 5000);
      })
      .catch((err) => {
        console.error(err);
        setShowSpinner(false);
      });
  }

  function RegexEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setShowMessageErrorEmail(!regex.test(email));
    if (email === "") {
      setShowMessageErrorEmail(false);
    }
  }

  return (
    <div className="formulaireAddUsers">
      <h1 className="titreFormddUser">Inviter une personne :</h1>
      <div className="formContent flex mt-5">
        <div className="sm:col-span-3 w-60 mr-5">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Nom complet
          </label>
          <div className="mt-2">
            <input
              type="text"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
              className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
            />
          </div>
        </div>
        <div className="sm:col-span-3 w-60 mr-5">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Adresse email
          </label>
          <div className="mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                RegexEmail(e.target.value);
              }}
              className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
            />
          </div>
          {showMessageErrorEmail && (
            <p className="errEmail">Adresse email invalide</p>
          )}
        </div>

        <div className="sm:col-span-3 w-44 mr-5">
          <label className="labelBTN text-sm font-medium leading-6 text-gray-900">
            &nbsp;
          </label>
          <div className="mt-2 divBtnInviter">
            <button
              disabled={!email || !nom || showMessageErrorEmail}
              className="btnInviter"
              onClick={inviterMembre}
            >
              Inviter
            </button>
          </div>
        </div>
      </div>
      <div className="listUser mt-5">
        <h1 className="titleList">Liste des membres (0)</h1>
        <div className="showDisplay">
          <div
            onClick={switchToList}
            className={`listIcon mr-5 ${showList ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faList} className="w-5 h-4 mr-2" />
            Liste
          </div>
          <div
            onClick={switchToGrid}
            className={`listIcon ${showGrid ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faGrip} className="w-5 h-5 mr-2" />
            Grid
          </div>
        </div>
        {showGrid && (
          <div className="ListMembresGrid mt-4">
            <div className="OneMembre mt-2 mr-10">
              <div className="photouser"></div>
              <div className="infosuser">
                <div>
                  <h1>ANDRIANARISON Steeve Kevin</h1>
                  <p className="poste">Développeur web</p>
                </div>
                <div className="adresse">Madagascar, Antsiranana</div>
                <div className="email">
                  <p>steeve@gmail.com</p>
                </div>
              </div>
              <div className="deleteuser">
                <FontAwesomeIcon
                  onClick={deleteuser}
                  icon={faTrash}
                  className="mb-2 faTrash"
                />
              </div>
            </div>
          </div>
        )}
        {showList && (
          <div className="ListMembresList mt-5">
            <div className="headList">
              <li className="nomList">Nom complet</li>
              <li className="adresseList">Adresse email</li>
              <li className="posteList">Poste</li>
              <li className="deleteList"></li>
            </div>
            <div className="bodyValue">
              <div className="BodyList">
                <li className="nomList">ANDRIANARISON Steeve Kevin</li>
                <li className="adresseList">steeve@gmail.com</li>
                <li className="posteList">Stagiaire</li>
                <li className="deleteList deleteuser">
                  <FontAwesomeIcon
                    onClick={deleteuser}
                    icon={faTrash}
                    className="mb-2 faTrash"
                  />
                </li>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
