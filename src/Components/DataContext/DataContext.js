import { createContext, useState } from "react";

export const DataContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}>
      {children}
    </DataContext.Provider>
  );
};
