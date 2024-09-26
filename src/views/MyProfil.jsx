import "../styles/MyProfil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MyProfil() {
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showMessageMdpError, setShowMessageMdpError] = useState(false);
  const [nomSociete, setnomSociete] = useState("");
  const [nomComplet, setnomComplet] = useState("");
  const [showMessageErrorEmail, setShowMessageErrorEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [poste, setPoste] = useState("");

  function RegexEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setShowMessageErrorEmail(!regex.test(email));
    if (email === "") {
      setShowMessageErrorEmail(false);
    }
  }

  function putInfos(){
    console.log(nomSociete, nomComplet, email, telephone, poste);
    
  }

  return (
    <>
      <div className="setInfosPerso mt-10">
        <h1 className="titreInfos">
          <FontAwesomeIcon icon={faGears} className="mr-2 w-6 h-6" />
          Ajouter ou modifier vos informations personnelles
        </h1>
        <div className="informationsForm mt-5">
          <div className="sm:col-span-3 w-60 mr-5">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Nom de la société
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={nomSociete}
                onChange={(e) => setnomSociete(e.target.value)}
                className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-3 w-60 mr-5">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Votre nom complet
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={nomComplet}
                onChange={(e) => setnomComplet(e.target.value)}
                className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-3 w-60 mr-5">
            <label className="block text-sm font-bold leading-6 text-gray-900">
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
          <div className="sm:col-span-3 w-60 mr-5">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Téléphone
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-3 w-60 mr-5">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Poste
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={poste}
                onChange={(e) => setPoste(e.target.value)}
                className="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-3 w-44 mr-5">
            <label className=" text-sm font-medium leading-6 text-gray-900">
              &nbsp;
            </label>
            <div className="mt-2 ">
              <button onClick={putInfos} className="btnInviter">Modifier</button>
            </div>
          </div>
        </div>
        <h1 className="titreInfos mt-10">
          <FontAwesomeIcon icon={faGears} className="mr-2 w-6 h-6" />
          Modifier votre mot de passe
        </h1>

        <div className="informationsForm mt-5">
          <div className="sm:col-span-3 w-60 mr-5">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Mot de passe actuel
            </label>
            <div className="mt-2 relative">
              <input
                type="text"
                className="pl-3 pr-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-3 w-60 mr-5">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Nouveau mot de passe
            </label>
            <div className="mt-2 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value !== passwordVerify) {
                    if (passwordVerify === "") {
                      setShowMessageMdpError(false);
                    } else {
                      setShowMessageMdpError(true);
                    }
                  } else {
                    setShowMessageMdpError(false);
                  }
                }}
                className="pl-3 pr-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <div className="sm:col-span-3 w-60 mr-5">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Confirmer le mot de passe
            </label>
            <div className="mt-2 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={passwordVerify}
                onChange={(e) => {
                  setPasswordVerify(e.target.value);
                  if (e.target.value !== password) {
                    setShowMessageMdpError(true);
                  } else {
                    setShowMessageMdpError(false);
                  }
                }}
                className="pl-3 pr-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </span>
            </div>
            {showMessageMdpError && (
              <p className="errEmail">Vérifier votre mot de passe</p>
            )}
          </div>
          <div className="sm:col-span-3 w-44 mr-5">
            <label className=" text-sm font-medium leading-6 text-gray-900">
              &nbsp;
            </label>
            <div className="mt-2 ">
              <button className="btnInviter">Modifier</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
