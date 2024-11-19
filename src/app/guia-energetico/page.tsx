"use client"
import seta from '../../images/seta.png'
import { useUser } from "@/context";
import Header from "./components/Header"
import Link from "next/link";
import Image from "next/image";
import totem from '../../images/totem.png'

export default function GuiaEnergetico(){

    const {name} = useUser();


    return(
        <main className="h-full w-full">
            <Header/>
            <article className="flex justify-center flex-col items-center gap-10 mb-5 p-20">
                <h1 className="text-2xl font-bold">Olá, {name || "Visitante"}!</h1>
                <p className="font-bold">
                    Sua pontuação inicial é de{" "}
                    <strong className="text-[#E5B43B]">10 pontos</strong>
                </p>
                <button className="p-1.5 bg-[#E5B43B] border-0 rounded-md text-black font-semibold text-[15px]">
                    <Link href={"/cadastro-descarte"}>Cadastre seu descarte</Link>
                </button>
            </article>

            <div className="min-h-screen p-10">
                <h1 className="text-center text-2xl font-bold mb-8">
                    Participe do sistema Electry para aumentar sua pontuação
                </h1>
                <div className="border flex flex-col md:flex-row border-[#E5B43B] p-10 rounded-md shadow-md w-full md:max-w-5xl mx-auto mb-10 items-center gap-10">
                    <div className="w-100 relative mb-10">
                        <h2 className="font-semibold text-xl mb-4">Passo a passo</h2>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li className="whitespace-nowrap">
                                Localize o ponto de coleta mais próximo a você no nosso MapEnergy.
                            </li>
                            <li className="whitespace-nowrap">
                                Realize o cadastro do produto que será descartado.
                            </li>
                            <li className="whitespace-nowrap">
                                Sua conta gera um código único de acesso, que deve ser informado no
                                Totem Electry do ponto de coleta.
                            </li>
                            <li className="whitespace-nowrap">
                                A pontuação resultante do descarte será acumulada para a troca das
                                recompensas Electry.
                            </li>
                        </ol>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <Image src={totem} alt="Totem Electry" className="max-w-full" />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto pb-20 mt-10">
                <h2 className="text-center text-xl font-bold mb-4">Confira a lista de pontos a serem <strong className="text-[#E5B43B]">acumulados</strong></h2>
                <table className="table-auto w-full border-collapse border border-yellow-400 text-left shadow-md">
                    <thead>
                        <tr className="bg-[#E5B43B]">
                            <th className="border border-[#E5B43B] px-4 py-2">Categorias e exemplos</th>
                            <th className="border border-[#E5B43B] px-4 py-2 text-center">Pontos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-[#E5B43B] px-4 py-2">
                                <strong>Small:</strong> Fones de ouvido, carregadores, controles
                                remotos, pen drives.
                            </td>
                            <td className="border border-[#E5B43B] px-4 py-2 text-center">350</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-[#E5B43B] px-4 py-2">
                                <strong>Average:</strong> Tablets, celulares, teclados, mouses,
                                roteadores.
                            </td>
                            <td className="border border-[#E5B43B] px-4 py-2 text-center">850</td>
                        </tr>
    
                        <tr className="bg-white">
                            <td className="border border-[#E5B43B] px-4 py-2">
                                <strong>Big:</strong> Monitores, laptops, impressoras, TVs
                                pequenas.
                            </td>
                            <td className="border border-[#E5B43B] px-4 py-2 text-center">1500</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-[#E5B43B] px-4 py-2">
                                <strong>Bigger:</strong> TVs grandes, geladeiras, máquinas de
                                lavar, fogões.
                            </td>
                            <td className="border border-[#E5B43B] px-4 py-2 text-center">4500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer className="fixed bottom-5 left-5 w-1/5">
                <Link href={'/'}><Image className='w-7' src={seta} alt='Botão de Voltar'/></Link>
            </footer>
       
        </main>
    )
}