import React, { createContext, useState } from "react";
export const VarContext = createContext(null);
const VarsProviders = ({ children }) => {
  const [mode, setMode] = useState("dark");
  return (
    <VarContext.Provider value={{ mode, setMode }}>
      {children}
    </VarContext.Provider>
  );
};

export default VarsProviders;
