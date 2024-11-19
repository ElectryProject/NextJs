"use client";

import React, { useState } from "react";
import laura from '../../images/laura.png'
import gabriela from '../../images/gabriela.png'
import gustavo from '../../images/gustavo.png'
import logo from '../../images/logo (2).png'
import dinheiro from '../../images/moedas.png'
import setinha from '../../images/setinha.png'
import seta from '../../images/seta.png'
import Header from "./components/Header";
import Link from "next/link";
 
const IntegrantesPage: React.FC = () => {
    const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
 
    const toggleMenu = (index: number) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
 
    const integrantes = [
        {
            nome: "Gabriela De Sousa Reis",
            imagem: gabriela.src,
            rm: "558830",
            curso: "1TDSPJ",
            github: "https://github.com/gabisreis7",
            linkedin: "https://www.linkedin.com/in/gabriela-de-sousa-reis-00935b237/",
        },
        {
            nome: "Laura Amadeu",
            imagem: laura.src,
            rm: "556690",
            curso: "1TDSPJ",
            github: "https://github.com/lauraamadeu10",
            linkedin: "https://www.linkedin.com/in/laura-amadeu-0995a22b6/",
        },
        {
            nome: "Gustavo Lazzuri",
            imagem: gustavo.src,
            rm: "556772",
            curso: "1TDSPI",
            github: "https://github.com/guLazzuri",
            linkedin: "https://br.linkedin.com/in/gustavolazzuri",
        },
    ];
 
    return (
        <div className="min-h-screen bg-yellow-100 flex flex-col font-lato text-black">
            <Header/>
 
            <main className="p-8 flex-1">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {integrantes.map((integrante, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={integrante.imagem}
                                alt={integrante.nome}
                                className="w-80 h-auto mx-auto border-none p-2 object-contain"
                            />
                            <h2 className="mt-4 text-lg font-semibold">{integrante.nome}</h2>
                            <button
                                onClick={() => toggleMenu(index)}
                                className="mt-2 focus:outline-none"
                            >
                                <img
                                    src={setinha.src}
                                    alt="Seta"
                                    className={`w-6 h-6 transform ${openMenus[index] ? 'rotate-180' : 'rotate-0'} transition-all`}
                                />
                            </button>
                            {openMenus[index] && (
                                <div className="mt-4 bg-gray-100 p-4 rounded-lg text-left">
                                    <p>
                                        <strong>RM:</strong> {integrante.rm}
                                    </p>
                                    <p>
                                        <strong>Curso:</strong> {integrante.curso}
                                    </p>
                                    <div className="flex gap-4 mt-2">
                                        <a
                                            href={integrante.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline text-blue-600"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href={integrante.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline text-blue-600"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            </main>
 
            <footer className="relative p-4">
                <Link href={'/'}><img src={seta.src} alt="Seta para voltar" className="absolute bottom-4 left-4 w-6 h-6 cursor-pointer"/></Link>
            </footer>
        </div>
    );
};
 
export default IntegrantesPage;