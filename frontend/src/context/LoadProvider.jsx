import { useState } from "react";
import { LoadContext } from "./LoadContext";

export const LoaderProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadContext.Provider>
  );
};
