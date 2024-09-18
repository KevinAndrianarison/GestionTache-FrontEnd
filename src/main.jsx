import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/montserrat"; // POUR LES TEXTES
import "@fontsource/righteous"; // POUR LES TITRES
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./contexte/useUser.jsx";
import { UrlContextProvider } from "./contexte/useUrl.jsx";
import { ShowContextProvider } from "./contexte/useShow.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UrlContextProvider>
        <ShowContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ShowContextProvider>
      </UrlContextProvider>
    </BrowserRouter>
  </StrictMode>
);
