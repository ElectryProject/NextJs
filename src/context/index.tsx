"use client";
import React, { createContext, useContext, useEffect, useState } from "react";


export interface UserContextType {
  name: string;
  setName: (name: string) => void;
  token: string | null;
  setToken: (token: string | null) => void;
}


const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

 
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

  
  useEffect(() => {
    if (typeof window !== "undefined" && name) {
      localStorage.setItem("userName", name);
    }
  }, [name]);

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("userToken", token);
      } else {
        localStorage.removeItem("userToken"); 
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


export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
