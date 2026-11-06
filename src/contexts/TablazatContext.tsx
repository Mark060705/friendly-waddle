import { createContext, useContext, useState, type ReactNode } from "react";
import { KONYVEK, type KonyvTipus } from "../adatok";



interface KonyvContextValue {
    konyvek: KonyvTipus[];
    konyvTorlese: (id: number) => void;
}

export const KonyvContext = createContext<KonyvContextValue | undefined>(undefined);


interface KonyvProviderProps {
  children: ReactNode;
}

export function KonyvProvider({ children }: KonyvProviderProps) {

    const [konyvek, setKonyvek] = useState<KonyvTipus[]>(KONYVEK);

    function konyvTorlese(id: number) {
        setKonyvek((elozoKonyvek) => elozoKonyvek.filter((konyv) => konyv.id !== id));
    }

  return (
    <KonyvContext.Provider value={{ konyvek, konyvTorlese }}>
      {children}
    </KonyvContext.Provider>
  )
}

export function useKonyvContext() {

  const context = useContext(KonyvContext);

    if (context === undefined) {
        throw new Error(
            "useKonyvContext must be used within a KonyvProvider",
        );
    }
    return context;
}