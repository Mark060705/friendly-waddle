import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import { KONYVEK, type KonyvTipus } from "../adatok";



interface KonyvContextValue {
    konyvek: KonyvTipus[];
    konyvTorlese: (id: number) => void;
  konyvHozzaadasa: (konyv: Omit<KonyvTipus, "id">) => void;
}

export const KonyvContext = createContext<KonyvContextValue | undefined>(undefined);


interface KonyvProviderProps {
  children: ReactNode;
}

export function KonyvProvider({ children }: KonyvProviderProps) {

    const [konyvek, setKonyvek] = useState<KonyvTipus[]>(KONYVEK);
    const kovetkezoId = useRef(Math.max(0, ...KONYVEK.map((konyv) => konyv.id)) + 1);

    function konyvTorlese(id: number) {
        setKonyvek((elozoKonyvek) => elozoKonyvek.filter((konyv) => konyv.id !== id));
    }

    function konyvHozzaadasa(ujKonyv: Omit<KonyvTipus, "id">) {
      const id = kovetkezoId.current;
      kovetkezoId.current += 1;
      setKonyvek((elozoKonyvek) => [...elozoKonyvek, { ...ujKonyv, id }]);
    }

  return (
    <KonyvContext.Provider value={{ konyvek, konyvTorlese, konyvHozzaadasa }}>
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