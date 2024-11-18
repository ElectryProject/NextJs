"use client"
import seta from '../../images/seta.png'

import React, { ChangeEvent, useState } from "react"
import { Button,  Container, Footer, Form, Input, Title } from "./styles";
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@/context';
import { useRouter } from 'next/navigation';

export default function Cadastro(){
    const{setName} = useUser();
    const[inputName, setInputName] = useState('');
    const[numeroCpf, setNumeroCpf] = useState('');
    const[idade, setIdade] = useState('');
    const[numeroTelefone, setNumeroTelefone] = useState('');
    const[numeroCep, setNumeroCep] = useState('');
    const[endereco, setEndereco] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setName(inputName);
        router.push("/guia-energetico"); 
      };

 

    return(
        <Container>
        <Title>Cadastro</Title>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 max-w-[600px] w-full">
            <input className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="text" placeholder="Nome completo" value={inputName} onChange={(e) => setInputName(e.target.value)} />
            <input className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="text" placeholder="CEP" />
            <input className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="text" placeholder="CPF" />
            <input className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="text" placeholder="Endereço" />
            <input className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="number" placeholder="Idade" />
            <input className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="email" placeholder="Email" />
            <input className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="tel" placeholder="Número de Telefone" />
            <input className="p-2.5 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="password" placeholder="Crie uma senha" />
    
            <div className="col-span-2 flex justify-center mt-4">
                <button className="p-2.5 w-[229px] bg-black text-white border-0 rounded-md text-base cursor-pointer" type="submit">Cadastrar</button>
            </div>
        </form>

        <Footer>
            <Link href={'/'}><Image className='w-7' src={seta} alt='Botão de Voltar'/></Link>
        </Footer>
        </Container>
      
    )           
   
}