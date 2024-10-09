import axios from "axios";
import { createContext, useContext, useState } from "react";
import { UrlContext } from "../contexte/useUrl";

export const ProjectContext = createContext({
  ListeProject: [],
  idProject: "",
  ListeProjectWhenChef: [],
  ListeProjectWhenMembres: [],
  oneProject: {},
});
export function ProjectContextProvider({ children }) {
  const [ListeProject, setListeProject] = useState([]);
  const [idProject, setIdProject] = useState([]);
  const [ListeProjectWhenChef, setListeProjectWhenChef] = useState([]);
  const [ListeProjectWhenMembres, setListeProjectWhenMembres] = useState([]);
  const [oneProject, setOneProject] = useState({});
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
        setListeProject(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function getProjectWhenCheforMembres() {
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);

    const request1 = axios.get(
      `${url}/api/entreprises/projets/${user.id}/projets-chefs`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const request2 = axios.get(
      `${url}/api/entreprises/projets/${user.id}/projets-membre`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    Promise.all([request1, request2])
      .then(([Response1, Response2]) => {
        setListeProjectWhenChef(Response1.data.data);
        setListeProjectWhenMembres(Response2.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <ProjectContext.Provider
      value={{
        ListeProject,
        oneProject,
        ListeProjectWhenChef,
        ListeProjectWhenMembres,
        idProject,
        setListeProject,
        setOneProject,
        getAllproject,
        getProjectWhenCheforMembres,
        setIdProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
