"use client";
import iconDuvida from '../../images/icon-duvida.png';
import iconParceria from '../../images/icon-parceria.png';
import iconOportunidade from '../../images/icon-oportunidade.png';
import Image from "next/image";
import { Button, Container, LeftPanel, TitleDuvida } from "./styles";
import { useState } from 'react';

export default function SectionDuvidas() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Mensagem de sucesso
  const [errorMessage, setErrorMessage] = useState(""); // Mensagem de erro

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mensagemData = {
      nome,
      email,
      assunto,
      mensagem,
    };

    try {
      const response = await fetch(`http://localhost:8080/Java_Electry2_war/api/mensagem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mensagemData),
      });

      if (response.ok) {
        setSuccessMessage("Dúvida cadastrada com sucesso!");
        setErrorMessage(""); 
        setNome("");
        setEmail("");
        setAssunto("");
        setMensagem("");

        
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("Erro ao enviar a dúvida. Tente novamente!");
        setSuccessMessage(""); 

        
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor: ', error);
      setErrorMessage("Erro ao conectar com o servidor.");
      setSuccessMessage(""); 

      
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <Container>
      <LeftPanel>
        <TitleDuvida>Dúvidas? Fale Conosco</TitleDuvida>
        <Button><Image src={iconDuvida} alt='ícone de dúvida' width={25} />Dúvidas Frequentes</Button>
        <Button><Image src={iconParceria} alt='ícone de parceria' width={30} />Parcerias</Button>
        <Button><Image src={iconOportunidade} alt='ícone de oportunidade' width={25} />Oportunidades Internas</Button>
      </LeftPanel>

      <div className="flex flex-col items-center">
        {/* Banner de mensagens */}
        {successMessage && (
          <div className="p-3 mb-4 w-[700px] text-center text-white bg-green-500 rounded-md">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-3 mb-4 w-[700px] text-center text-white bg-red-500 rounded-md">
            {errorMessage}
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[700px] mt-20">
          <input
            className="p-3 text-base w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="p-3 text-base w-full border border-gray-300 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 text-base w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Assunto"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
          <textarea
            className="p-3 text-base w-full border border-gray-300 rounded-md resize-none"
            placeholder="Dúvidas ou Comentários"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
          <button className="bg-black text-white p-2.5 text-base w-[150px] border-none rounded-md cursor-pointer mt-4">
            Enviar
          </button>
        </form>
      </div>
    </Container>
  );
}
