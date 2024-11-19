"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

// Definir o tipo do contexto
interface UserContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

// Criar o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// UserProvider para envolver a aplicação
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Acessar localStorage apenas no cliente
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('userName');
      if (storedName) {
        setName(storedName);
      }
      setLoading(false); // Finaliza o carregamento quando os dados estiverem prontos
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Evitar renderização antes do carregamento
  }

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acessar o contexto em qualquer componente
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
