import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/montserrat"; // POUR LES TEXTES
import "@fontsource/righteous"; // POUR LES TITRES
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./contexte/useUser.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);
