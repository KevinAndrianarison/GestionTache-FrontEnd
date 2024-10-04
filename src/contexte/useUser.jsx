import { createContext, useContext, useState } from "react";
import { UrlContext } from "../contexte/useUrl";
import axios from "axios";

export const UserContext = createContext({
  ListeUser: [],
  iduser: "",
});

export function UserContextProvider({ children }) {
  const [ListeUser, setListeUser] = useState([]);
  const [iduser, setIduser] = useState("");

  const { url } = useContext(UrlContext);

  function getAllUser() {
    setListeUser([]);
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    axios
      .get(`${url}/api/entreprises/${user.entreprise_id}/employes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListeUser(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <UserContext.Provider
      value={{
        ListeUser,
        iduser,
        getAllUser,
        setListeUser,
        setIduser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
