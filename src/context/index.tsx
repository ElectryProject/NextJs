"use client"
import { createContext, ReactNode, useContext, useState, useEffect } from "react";

type UserContextType = {
    name: string;
    setName: (name: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    // Inicialize o estado com o valor de localStorage, se presente
    const [name, setName] = useState<string>(() => {
        return localStorage.getItem("userName") || ""; // Se não houver nome, use uma string vazia
    });

    // Atualize o localStorage sempre que o nome mudar
    useEffect(() => {
        if (name) {
            localStorage.setItem("userName", name);
        }
    }, [name]);

    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
