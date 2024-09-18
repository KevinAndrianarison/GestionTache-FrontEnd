import { useState, useContext } from "react";
import "./styles/LoginPage.css";
import { UrlContext } from "./contexte/useUrl";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const { url } = useContext(UrlContext);

  function loginFunction() {
    let formData = {
      email: email,
      mot_de_passe: password,
    };
    
    axios
      .post(`${url}/projet-dev/api.php`, formData)
      .then((response) => {
        console.log(response.data);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="main">
      <div className="login">
        <div className="logo"></div>
        <div className="forms">
          <h1 className="titreLogin">Connectez vous !</h1>
          <div className="inputs mt-16">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input w-80 pb-2 border-b-2 border-[rgba(255,255,255,0.849)] bg-transparent placeholder:text-[rgba(255,255,255,0.849)] focus:outline-none focus:border-blue-500"
              placeholder="Adresse email"
            />

            <div className="relative w-80 mt-10">
              <input
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input w-full pb-2 border-b-2 border-[rgba(255,255,255,0.849)] bg-transparent placeholder:text-[rgba(255,255,255,0.849)] focus:outline-none focus:border-blue-500"
                placeholder="Mot de passe"
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)} // Inverser l'état de showPassword
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>

            <button className="btn mt-10" onClick={loginFunction}>
              Se connecter
            </button>
          </div>
          <p className="forgot mt-2">Mot de passe oubié ?</p>
        </div>
      </div>
    </div>
  );
}
