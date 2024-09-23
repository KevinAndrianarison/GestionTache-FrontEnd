import { createContext, useState } from "react";

export const UrlContext = createContext({
  url: "",
});
export function UrlContextProvider({ children }) {
  const [url, setUrl] = useState("http://192.168.1.115");

  return (
    <UrlContext.Provider
      value={{
        url,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
}
