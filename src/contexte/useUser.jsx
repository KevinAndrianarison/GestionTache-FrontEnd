import { createContext, useState } from "react";

export const UserContext = createContext({
  nomComplet: "",
  email: "",
  emailTovalidate: "",
  motDePasse: "",
  poste: "",
  telephone: null,
  statut: "",
  changeValue: () => {},
});

export function UserContextProvider({ children }) {
  const [nomComplet, setNomComplet] = useState("");
  const [email, setEmail] = useState("");
  const [emailTovalidate, setEmailTovalidate] = useState("");
  const [poste, setPoste] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [statut, setStatut] = useState("");

  const changeValue = () => {
    setNomComplet("Steeve");
    setEmail("Steeve@123");
    setMotDePasse("123");
    setPoste("Directeur");
    setTelephone(5555);
    setStatut("user");
  };

  return (
    <UserContext.Provider
      value={{
        nomComplet,
        email,
        poste,
        motDePasse,
        telephone,
        statut,
        emailTovalidate,
        setEmailTovalidate,
        changeValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
