import axios from "axios";
import { createContext, useContext, useState } from "react";
import { UrlContext } from "../contexte/useUrl";

export const ProjectContext = createContext({
  ListeProject: [],
});
export function ProjectContextProvider({ children }) {
  const [ListeProject, setListeProject] = useState([]);
  const { url } = useContext(UrlContext);

  function getAllproject() {
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    axios
      .get(`${url}/api/entreprises/${user.entreprise_id}/projets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListeProject(response.data.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <ProjectContext.Provider
      value={{
        ListeProject,
        setListeProject,
        getAllproject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
