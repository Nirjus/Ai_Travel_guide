import React, { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  state: object;
  setState: (state: object) => void;
}

export const TripContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<object>([]);
  return (
    <TripContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
