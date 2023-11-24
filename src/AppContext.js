import { createContext, useState } from "react";
import MOCK from "./mock.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(MOCK);

  return (
    <AppContext.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
