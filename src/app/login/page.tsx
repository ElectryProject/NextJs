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
  const { setName, setToken } = useUser(); 
  const [inputName, setInputName] = useState(""); 
  const [inputPassword, setInputPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
    setSuccess(""); 

    if (!inputName || !inputPassword) {
      setError("Por favor, insira um nome e uma senha.");
      return;
    }

    try {
      //  Verificação de login
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

      // Armazenação de login
      const tokenResponse = await fetch(
        "http://localhost:8080/Java_Electry2_war/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: inputName, senha: inputPassword }),
        }
      );

      if (!tokenResponse.ok) {
        setError("Erro ao gerar o token de login.");
        return;
      }

      const { token } = await tokenResponse.json();

      
      setName(inputName);
      setToken(token); 
      localStorage.setItem("userName", inputName);
      localStorage.setItem("userToken", token);

     
      setSuccess("Login realizado com sucesso! Redirecionando...");
      setTimeout(() => {
        router.push("/guia-energetico");
      }, 3000); 
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
