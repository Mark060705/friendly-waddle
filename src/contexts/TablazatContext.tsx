import { createContext, useContext, useState, type ReactNode } from "react";
import { KONYVEK, type KonyvTipus } from "../adatok";



interface TablazatContextValue {
    allapotKezelo: (index: number, newKonyv: KonyvTipus) => void;
    konyvek: KonyvTipus[];
}

export const TablazatContext = createContext<TablazatContextValue | undefined>(undefined);


interface TablazatProviderProps {
  children: ReactNode;
}

export function TablazatProvider({ children }: TablazatProviderProps) {

    const [konyvek, setKonyvek] = useState<KonyvTipus[]>(KONYVEK);    
  
    function allapotKezelo(index: number, newKonyv: KonyvTipus) {
        //
        const updatedKonyvek: KonyvTipus[] = [...konyvek];
        updatedKonyvek[index] = newKonyv;
        setKonyvek(updatedKonyvek);
    }

  return (
    <TablazatContext.Provider value={{ allapotKezelo, konyvek }}>
      {children}
    </TablazatContext.Provider>
  )
}

// Custom hook to use the TablazatContext

export function useTablazatContext() {

  const context = useContext(TablazatContext);

    if (context === undefined) {
        throw new Error(
            "useTablazatContext must be used within a TablazatProvider",
        );
    }
    return context;
}