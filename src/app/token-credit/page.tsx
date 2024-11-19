"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import perigo from "../../images/warning.png";
import Image from "next/image";
import seta from "../../images/seta.png";
import Header from "../guia-energetico/components/Header";
import Link from "next/link";

export default function GerarToken() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const gerarToken = async () => {
      try {
        const nome = localStorage.getItem("userName"); // Obtém o nome armazenado
        if (!nome) {
          setError("Usuário não encontrado. Faça login para continuar.");
          setLoading(false);
          setTimeout(() => router.push("/login"), 3000); // Redireciona para login após 3 segundos
          return;
        }

        // Verifica se já existe um token no localStorage
        const storedToken = localStorage.getItem("userToken");
        if (storedToken) {
          setToken(storedToken);
          setLoading(false);
          return;
        }

        // Caso contrário, gera um novo token
        const response = await fetch("http://127.0.0.1:5000/gerar-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome: nome }),
        });

        if (!response.ok) {
          throw new Error("Erro ao gerar o token.");
        }

        const data = await response.json();
        setToken(data.token); // Define o token no estado
        localStorage.setItem("userToken", data.token); // Salva o token no localStorage
      } catch (error) {
        console.error("Erro ao gerar o token:", error);
        setError("Erro ao gerar o token. Por favor, tente novamente.");
      } finally {
        setLoading(false); // Sempre para o carregamento, independentemente de sucesso ou erro
      }
    };

    gerarToken();
  }, [router]);

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
        {loading && <p>Gerando token...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {token && !loading && (
          <div className="gap-5 flex flex-col justify-center">
            <p className="text-xl">
              <strong>Código de Acesso:</strong>
            </p>
            <div className="border-2 mx-auto max-w-sm border-gray-300 bg-[#F0ECE4] p-7 rounded-md">
              <p className="font-bold text-2xl">{token}</p>
            </div>
          </div>
        )}
      </div>
      <footer className="fixed bottom-5 left-5 w-1/5">
        <Link href={"/"}>
          <Image className="w-7" src={seta} alt="Botão de Voltar" />
        </Link>
      </footer>
    </main>
  );
}
