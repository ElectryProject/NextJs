"use client";
import seta from "../../images/seta.png";
import React, { useState } from "react";
import { Button, CheckboxContainer, Footer, LoginContainer, Main, Title, Banner } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { setName } = useUser(); // Contexto do usuário
  const [inputName, setInputName] = useState(""); // Nome do usuário
  const [inputPassword, setInputPassword] = useState(""); // Senha do usuário
  const [error, setError] = useState(""); // Mensagens de erro
  const [success, setSuccess] = useState(""); // Mensagens de sucesso
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpa erros anteriores
    setSuccess(""); // Limpa mensagens de sucesso anteriores

    if (!inputName || !inputPassword) {
      setError("Por favor, insira um nome e uma senha.");
      return;
    }

    try {
      // Passo 1: Verificar login
      const verifyResponse = await fetch(
        `http://localhost:8080/Java_Electry2_war/api/usuario/verificar?nome=${inputName}&senha=${inputPassword}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!verifyResponse.ok) {
        const verifyError = await verifyResponse.json();
        setError(verifyError.mensagem || "Erro ao realizar login.");
        return;
      }

      // Login bem-sucedido
      setName(inputName); // Salva o nome no contexto do usuário
      localStorage.setItem("userName", inputName); // Salva o nome no localStorage

      // Passo 2: Armazenar dados de login
      const storeResponse = await fetch(
        "http://localhost:8080/Java_Electry2_war/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: inputName, senha: inputPassword }),
        }
      );

      if (!storeResponse.ok) {
        setError("Erro ao salvar os dados de login.");
        return;
      }

      // Exibe mensagem de sucesso e redireciona após alguns segundos
      setSuccess("Login realizado com sucesso! Redirecionando...");
      setTimeout(() => {
        router.push("/guia-energetico");
      }, 3000); // 3 segundos
    } catch (err) {
      console.error("Erro durante a comunicação com o servidor:", err);
      setError("Erro ao se comunicar com o servidor.");
    }
  };

  return (
    <Main>
      {success && (
        <Banner>
          <p>{success}</p>
        </Banner>
      )}
      <LoginContainer>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Title>Login</Title>
          <input
            className="p-4 w-80 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
            type="text"
            placeholder="Username"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <input
            className="p-4 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <CheckboxContainer>
            <input
              type="checkbox"
              id="showPassword"
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label htmlFor="showPassword">Mostrar senha?</label>
          </CheckboxContainer>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button type="submit">Entrar</Button>
        </form>
      </LoginContainer>
      <Footer>
        <Link href={"/"}>
          <Image className="w-7" src={seta} alt="Botão de Voltar" />
        </Link>
      </Footer>
    </Main>
  );
}
