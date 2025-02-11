import React, { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  state: any;
  setState: (state: any) => void;
  trip: any;
  setTrip: (trip: any) => void;
}

export const TripContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<any>();
  const [trip, setTrip] = useState<any>();
  return (
    <TripContext.Provider
      value={{
        state,
        setState,
        trip,
        setTrip,
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
