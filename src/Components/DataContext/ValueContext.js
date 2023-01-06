import { createContext, useState } from "react";

export const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [valueId, setValueID] = useState("");

  return (
    <ValueContext.Provider
      value={{
        valueId,
        setValueID,
      }}>
      {children}
    </ValueContext.Provider>
  );
};
