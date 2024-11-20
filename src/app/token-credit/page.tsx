"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@/context";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";
import perigo from "../../images/warning.png";
import seta from "../../images/seta.png";

//API Python com Flask para gerar o Token
const API_FLASK_URL = "http://localhost:5000/gerar-token";
//API RestFul Java para armazenar
const API_JAVA_URL = "http://localhost:8080/Java_Electry2_war/api/token";

export default function TokenPage() {
  const { name, token: userToken, setToken } = useUser(); 
  const [token, setTokenState] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!name) {
      router.push("/login"); 
      return;
    }

    // Verifica se o token já existe
    const storedToken = userToken || localStorage.getItem("userToken");
    if (storedToken) {
      setTokenState(storedToken);
    } else {
      // Solicita um novo token da API Flask
      fetch(API_FLASK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: name }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao gerar o token");
          }
          return response.json();
        })
        .then((data) => {
          const newToken = data.token;
          setToken(newToken); 
          localStorage.setItem("userToken", newToken); 
          setTokenState(newToken); 

          
          fetch(API_JAVA_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ codigoToken: newToken }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Erro ao armazenar o token na API Java");
              }
              return response.json();
            })
            .then((data) => {
              console.log("Token armazenado com sucesso na API Java:", data);
            })
            .catch((error) => {
              console.error("Erro ao armazenar o token na API Java:", error);
            });
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    }
  }, [name, userToken, setToken, router]);

  if (!name) return null;

  return (
    <main>
      <Header />
      <div className="flex flex-col text-center gap-10">
        <h1 className="text-2xl font-bold mt-10">
          O acesso ao Token Credit é único e vinculado aos seus dados de cadastro
        </h1>
        <div className="flex justify-center">
          <Image src={perigo} alt="símbolo de perigo" />
        </div>
        <div className="gap-5 flex flex-col justify-center">
          <p className="text-xl">
            <strong>Código de Acesso:</strong>
          </p>
          <div className="border-2 mx-auto max-w-sm border-gray-300 bg-[#F0ECE4] p-7 rounded-md">
            <p className="font-bold text-2xl">{token || "Carregando..."}</p>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-5 left-5 w-1/5">
        <Link href={"/"}>
          <Image className="w-7" src={seta} alt="Botão de Voltar" />
        </Link>
      </footer>
    </main>
  );
}
