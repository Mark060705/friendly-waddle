import { createContext, useContext, type ReactNode } from "react";
import type { KonyvTipus } from "../adatok";
import { useKonyvContext } from "./TablazatContext";

interface UrlapContextValue {
    konyvHozzaadasa: (konyv: Omit<KonyvTipus, "id">) => void;
}

const UrlapContext = createContext<UrlapContextValue | undefined>(undefined);

interface UrlapProviderProps {
    children: ReactNode;
}

export function UrlapProvider({ children }: UrlapProviderProps) {
    const { konyvHozzaadasa } = useKonyvContext();

    return (
        <UrlapContext.Provider value={{ konyvHozzaadasa }}>
            {children}
        </UrlapContext.Provider>
    );
}

export function useUrlapContext() {
    const context = useContext(UrlapContext);

    if (context === undefined) {
        throw new Error("useUrlapContext must be used within a UrlapProvider");
    }

    return context;
}