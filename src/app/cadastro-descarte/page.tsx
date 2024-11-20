"use client"
import React, { useState } from "react";
import seta from "../../images/seta.png";
import Link from "next/link";
import Image from "next/image";

const Page: React.FC = () => {
  const [descarteAgenda, setDescarteAgenda] = useState<
    { produto: string; data: string; localizacao: string }[]
  >([]);
  const [produto, setProduto] = useState("");
  const [data, setData] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [sucesso, setSucesso] = useState(false); // Estado para controlar o banner

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!produto || !data || !localizacao) {
      alert("Preencha todos os campos antes de cadastrar!");
      return;
    }

    const descarteData = { produto, dataDescarte: data };
    const pontoColetaData = { localizacao };

    try {
      const responseDescarte = await fetch(
        "http://localhost:8080/Java_Electry2_war/api/descarte",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(descarteData),
        }
      );

      if (!responseDescarte.ok) {
        const error = await responseDescarte.json();
        console.error("Erro ao cadastrar o descarte:", error);
        alert("Erro ao cadastrar o descarte. Verifique os dados.");
        return;
      }

      const responsePontoColeta = await fetch(
        "http://localhost:8080/Java_Electry2_war/api/pontoColeta",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pontoColetaData),
        }
      );

      if (!responsePontoColeta.ok) {
        const error = await responsePontoColeta.json();
        console.error("Erro ao cadastrar o ponto de coleta:", error);
        alert("Erro ao cadastrar o ponto de coleta. Verifique os dados.");
        return;
      }

      setSucesso(true); // Mostrar o banner
      setTimeout(() => setSucesso(false), 5000); // Ocultar após 5 segundos

      setDescarteAgenda((prev) => [...prev, { produto, data, localizacao }]);
      setProduto("");
      setData("");
      setLocalizacao("");
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Erro ao conectar com o servidor. Tente novamente.");
    }
  };

  return (
    <div
      className="min-h-screen gap-5 flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#E5B43B" }}
    >
      {sucesso && (
        <div className="w-full max-w-md p-3 mb-4 text-white bg-green-500 rounded-lg text-center">
          Descarte cadastrado com sucesso!
        </div>
      )}

      <div className="w-full max-w-md p-6 flex flex-col gap-6 rounded-lg mb-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          Cadastre seu descarte
        </h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Produto e Categoria"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
          <input
            type="text"
            placeholder="Informe a data de descarte"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
          <input
            type="text"
            placeholder="Informe a localização"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
          <button
            type="submit"
            className="w-1/3 bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition mx-auto block"
          >
            Cadastrar
          </button>
        </form>
      </div>

      {/* Agenda de descartes */}
      <div className="w-full max-w-30 p-6 rounded-lg" style={{ backgroundColor: "#E5B43B" }}>
        <h2 className="text-xl font-bold text-center mb-6 text-black">
          Agenda de descartes
        </h2>
        <table
          className="w-full table-auto border-collapse border"
          style={{ borderColor: "#A07E29" }}
        >
          <thead>
            <tr>
              <th className="px-4 py-2 text-black" style={{ border: "3px solid #A07E29" }}>
                Produto
              </th>
              <th className="px-4 py-2 text-black" style={{ border: "3px solid #A07E29" }}>
                Data Agendada
              </th>
              <th className="px-4 py-2 text-black" style={{ border: "3px solid #A07E29" }}>
                Localização
              </th>
            </tr>
          </thead>
          <tbody>
            {descarteAgenda.length > 0 ? (
              descarteAgenda.map((descarte, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-black" style={{ border: "3px solid #A07E29" }}>
                    {descarte.produto}
                  </td>
                  <td className="px-4 py-2 text-black" style={{ border: "3px solid #A07E29" }}>
                    {descarte.data}
                  </td>
                  <td className="px-4 py-2 text-black" style={{ border: "3px solid #A07E29" }}>
                    {descarte.localizacao}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-4 py-2 text-center text-black" style={{ border: "3px solid #A07E29" }}>
                  Nenhum descarte agendado ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <footer className="fixed bottom-5 left-5 w-1/5">
        <Link href={"/"}>
          <Image className="w-7" src={seta} alt="Botão de Voltar" />
        </Link>
      </footer>
    </div>
  );
};

export default Page;
