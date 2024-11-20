"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Definir o tipo do contexto
export interface UserContextType {
  name: string;
  setName: (name: string) => void;
  token: string | null;
  setToken: (token: string | null) => void;
}

// Criar o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// UserProvider para envolver a aplicação
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Carregar o nome e o token do localStorage ao iniciar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("userName");
      const storedToken = localStorage.getItem("userToken");
      if (storedName) {
        setName(storedName);
      }
      if (storedToken) {
        setToken(storedToken);
      }
      setLoading(false);
    }
  }, []);

  // Atualizar o localStorage sempre que o nome mudar
  useEffect(() => {
    if (typeof window !== "undefined" && name) {
      localStorage.setItem("userName", name);
    }
  }, [name]);

  // Atualizar o localStorage sempre que o token mudar
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("userToken", token);
      } else {
        localStorage.removeItem("userToken"); // Remover se o token for null
      }
    }
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ name, setName, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acessar o contexto em qualquer componente
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
