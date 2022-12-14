import { createContext, useState, ReactNode } from "react";

interface iMainProviderProps {
  children: ReactNode;
}

export interface iMainContext {
  whichPage: string;
  setWhichPage: React.Dispatch<React.SetStateAction<string>>;
}

export const MainContext = createContext<iMainContext>({} as iMainContext);

const MainProvider = ({ children }: iMainProviderProps) => {
  const [whichPage, setWhichPage] = useState<string>("landing");

  return (
    <MainContext.Provider value={{ whichPage, setWhichPage }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
