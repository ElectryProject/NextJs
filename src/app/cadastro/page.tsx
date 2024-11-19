"use client";
import seta from "../../images/seta.png";
import React, { useState } from "react";
import { Button, Container, Footer, Form, Input, Title } from "./styles";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@/context";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const { setName } = useUser();
  const [inputName, setInputName] = useState('');
  const [numeroCpf, setNumeroCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [numeroTelefone, setNumeroTelefone] = useState('');
  const [numeroCep, setNumeroCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Mensagem de sucesso
  const [errorMessage, setErrorMessage] = useState(''); // Mensagem de erro
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Limpa qualquer mensagem de erro
    setSuccessMessage(''); // Limpa a mensagem de sucesso anterior

    // Atualize o nome no contexto
    setName(inputName);

    const userData = {
      nome: inputName,
      numeroCpf,
      idade: parseInt(idade),
      numeroTelefone,
      numeroCep,
      endereco,
      email,
      senha,
    };

    try {
      const response = await fetch(`http://localhost:8080/Java_Electry2_war/api/usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setSuccessMessage('Cadastro realizado com sucesso! Redirecionando...');
        setTimeout(() => {
          router.push('/guia-energetico');
        }, 3000); // Redireciona após 3 segundos
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.mensagem || 'Não foi possível cadastrar o usuário.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      setErrorMessage('Erro ao conectar com o servidor.');
    }
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 max-w-[600px] w-full">
        <input
          className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
          type="text"
          placeholder="Nome completo"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
          type="text"
          placeholder="CEP"
          value={numeroCep}
          onChange={(e) => setNumeroCep(e.target.value)}
        />
        <input
          className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
          type="text"
          placeholder="CPF"
          value={numeroCpf}
          onChange={(e) => setNumeroCpf(e.target.value)}
        />
        <input
          className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <input
          className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
          type="tel"
          placeholder="Número de Telefone"
          value={numeroTelefone}
          onChange={(e) => setNumeroTelefone(e.target.value)}
        />
        <input
          className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black"
          type="password"
          placeholder="Crie uma senha (12 caracteres)"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="col-span-2 flex justify-center mt-4">
          <button className="p-2.5 w-[229px] bg-black text-white border-0 rounded-md text-base cursor-pointer" type="submit">Cadastrar</button>
        </div>
      </form>

      {successMessage && <p style={{ color: "green", textAlign: "center" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}

      <Footer>
        <Link href={"/"}>
          <Image className="w-7" src={seta} alt="Botão de Voltar" />
        </Link>
      </Footer>
    </Container>
  );
}
