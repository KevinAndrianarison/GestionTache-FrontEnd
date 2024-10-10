import axios from "axios";
import { createContext, useContext, useState } from "react";
import { UrlContext } from "../contexte/useUrl";
import { ShowContext } from "../contexte/useShow";

export const ProjectContext = createContext({
  ListeProject: [],
  idProject: "",
  ListeProjectWhenChef: [],
  ListeProjectWhenMembres: [],
  ListMembres: [],
  oneProject: {},
  nomProjet: "",
  dateDebut: "",
  dateFin: "",
  description: "",
  idProjet: "",

});
export function ProjectContextProvider({ children }) {
  const [ListeProject, setListeProject] = useState([]);
  const [idProject, setIdProject] = useState([]);
  const [ListeProjectWhenChef, setListeProjectWhenChef] = useState([]);
  const [ListeProjectWhenMembres, setListeProjectWhenMembres] = useState([]);
  const [oneProject, setOneProject] = useState({});
  const [nomProjet, setNomProjet] = useState({});
  const [dateDebut, setDateDebut] = useState({});
  const [dateFin, setDateFin] = useState({});
  const [description, setDescription] = useState({});
  const [idProjet, setIdProjet] = useState({});
  const [ListMembres, setListMembres] = useState([]);
  const { url } = useContext(UrlContext);
  const { setShowSetProject } = useContext(ShowContext);

  function getAllproject() {
    setListeProject([]);
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
  function getProjectWhenChef() {
    setListeProjectWhenChef([]);
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    axios
      .get(`${url}/api/entreprises/projets/${user.id}/projets-chefs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListeProjectWhenChef(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getProjectWhenMembres() {
    setListeProjectWhenMembres([]);
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    axios
      .get(`${url}/api/entreprises/projets/${user.id}/projets-membre`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListeProjectWhenMembres(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getOneProjet(idProject) {
    const tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    axios
      .get(
        `${url}/api/entreprises/projets/${user.id}/projets-chefs/${idProject}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setNomProjet(response.data.data.titre)
        setDateDebut(response.data.data.date_debut)
        setDateFin(response.data.data.date_fin)
        setDescription(response.data.data.description)
        setIdProjet(response.data.data.id)
        setShowSetProject(true);
        setListMembres(response.data.data.membres)
        
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
        nomProjet, 
        dateDebut,
        dateFin,
        description,
        idProjet,
        ListMembres,
        setListeProject,
        setOneProject,
        getAllproject,
        getProjectWhenChef,
        setIdProject,
        getProjectWhenMembres,
        getOneProjet,
        setNomProjet,
        setDateDebut,
        setDateFin,
        setDescription,
        setListMembres
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
