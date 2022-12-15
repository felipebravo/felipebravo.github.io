import { createContext, useState, ReactNode } from "react";

interface iMainProviderProps {
  children: ReactNode;
}

export interface iMainContext {
  whichPage: string;
  setWhichPage: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainContext = createContext<iMainContext>({} as iMainContext);

const MainProvider = ({ children }: iMainProviderProps) => {
  const [whichPage, setWhichPage] = useState<string>("landing");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <MainContext.Provider
      value={{ whichPage, setWhichPage, isModalOpen, setIsModalOpen }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
