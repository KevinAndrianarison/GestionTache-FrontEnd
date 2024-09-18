import { useState } from "react";
import "../styles/GestionUserPage.css";
import { faTrash, faList, faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GestionUserPage() {
  const [email, setEmail] = useState("");
  const [showMessageErrorEmail, setShowMessageErrorEmail] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showGrid, setShowGrid] = useState(true);

  function switchToGrid() {
    setShowList(false);
    setShowGrid(true);
  }

  function switchToList() {
    setShowGrid(false);
    setShowList(true);
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
            <button className="btnInviter">Inviter</button>
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
                <FontAwesomeIcon icon={faTrash} className="mb-2 w-5 h-5" />
              </div>
            </div>
          </div>
        )}
        {showList && <p className="mt-5">ListView</p>}
      </div>
    </div>
  );
}
