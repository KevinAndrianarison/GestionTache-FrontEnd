import "../styles/LoginPage.css";
import { ShowContext } from "../contexte/useShow";
import axios from "axios";
import { UrlContext } from "../contexte/useUrl";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { MessageContext } from "../contexte/useMessage";

export default function SignUpComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [email, setEmail] = useState("");
  const [showMessageErrorEmail, setShowMessageErrorEmail] = useState(false);
  const [showMessageMdpError, setShowMessageMdpError] = useState(false);

  const {
    setShowLoginComponent,
    setShowSignUpComponent,
    setShowSpinner,
    setShowConfirmMdp,
  } = useContext(ShowContext);
  const { url } = useContext(UrlContext);
  const { setMessageSucces, setMessageError } = useContext(MessageContext);

  function showLoginComponent() {
    setShowSignUpComponent(false);
    setShowLoginComponent(true);
  }

  function crateAdmin() {
    setShowConfirmMdp(true);
    // setShowSpinner(true);
    // let formData = {
    //   email_user: email,
    //   mot_de_passe_user: passwordVerify,
    //   statut: "admin",
    // };
    // axios
    //   .post(`${url}/projet-dev/app/inscription.php`, formData)
    //   .then((response) => {
    //     setEmail("");
    //     setPassword("");
    //     setPasswordVerify("");
    //     setMessageSucces("Inscription réussi !");
    //     setShowSpinner(false);
    //     setTimeout(() => {
    //       setMessageSucces("");
    //     }, 5000);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     setShowSpinner(false);
    //   });
  }

  function RegexEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setShowMessageErrorEmail(!regex.test(email));
    if (email === "") {
      setShowMessageErrorEmail(false);
    }
  }

  return (
    <>
      <div className="forms">
        <h1 className="titreSignin">Créez votre compte !</h1>
        <div className="inputs mt-16">
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              RegexEmail(e.target.value);
            }}
            className="input w-80 pb-2 border-b-2 border-[rgba(255,255,255,0.849)] bg-transparent placeholder:text-[rgba(255,255,255,0.849)] focus:outline-none focus:border-blue-500"
            placeholder="Votre adresse email"
          />
          {showMessageErrorEmail && (
            <p className="errEmail">Adresse email invalide</p>
          )}

          <div className="relative w-80 mt-10">
            <input
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
              className="input w-full pb-2 border-b-2 border-[rgba(255,255,255,0.849)] bg-transparent placeholder:text-[rgba(255,255,255,0.849)] focus:outline-none focus:border-blue-500"
              placeholder="Créer un mot de passe"
            />
            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <div className="relative w-80 mt-10">
            <input
              value={passwordVerify}
              onChange={(e) => {
                setPasswordVerify(e.target.value);
                if (e.target.value !== password) {
                  setShowMessageMdpError(true);
                } else {
                  setShowMessageMdpError(false);
                }
              }}
              className="input w-full pb-2 border-b-2 border-[rgba(255,255,255,0.849)] bg-transparent placeholder:text-[rgba(255,255,255,0.849)] focus:outline-none focus:border-blue-500"
              placeholder="Confirmer votre mot de passe"
            />

            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          {showMessageMdpError && (
            <p className="errEmail">Vérifier votre mot de passe</p>
          )}

          <button
            disabled={
              !email ||
              !password ||
              !passwordVerify ||
              showMessageMdpError ||
              showMessageErrorEmail
            }
            onClick={crateAdmin}
            className="btn mt-10"
          >
            S'inscrire
          </button>
        </div>
        <div className="signup mt-5">
          <p className="already">Vous avez déjà un compte ?</p>
          <p onClick={showLoginComponent} className="signUp">
            {" "}
            Connexion !
          </p>
        </div>
      </div>
    </>
  );
}
