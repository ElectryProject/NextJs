"use client"
import iconDuvida from '../../images/icon-duvida.png'
import iconParceria from '../../images/icon-parceria.png'
import iconOportunidade from '../../images/icon-oportunidade.png'
import Image from "next/image";
import { Button, Container, Form, Input, LeftPanel, SubmitButton, Textarea, TitleDuvida } from "./styles";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SectionDuvidas(){
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[assunto, setAssunto] = useState("");
    const[mensagem, setMensagem] = useState("");

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();

        const mensagemData={
            nome,
            email,
            assunto, 
            mensagem,
        };

        try{
            const response = await fetch(`http://localhost:8080/Java_Electry2_war/api/mensagem`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mensagemData),
            });
            if(response.ok){
                alert('Dúvida cadastrada com sucesso!')
                setNome("");
                setEmail("");
                setAssunto("");
                setMensagem("");
            }
        }catch(error){
            console.error('Erro ao conectar com o servidor: ', error);
        }
    };

    return(
        <Container>
            <LeftPanel>
                <TitleDuvida>Dúvidas? Fale Conosco</TitleDuvida>
                <Button><Image src={iconDuvida} alt='ícone de dúvida' width={25}/>Dúvidas Frequentes</Button>
                <Button><Image src={iconParceria} alt='ícone de parceria' width={30}/>Parcerias</Button>
                <Button><Image src={iconOportunidade} alt='ícone de oportunidade' width={25}/>Oportunidades Internas</Button>
            </LeftPanel>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/5 mt-20 ml-4">
                <input className="p-3 text-base w-[700px] border border-gray-300 rounded-md ml-[155px]" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input className="p-3 text-base w-[700px] border border-gray-300 rounded-md ml-[155px]" type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input className="p-3 text-base w-[700px] border border-gray-300 rounded-md ml-[155px]" type="text" placeholder="Assunto" value={assunto} onChange={(e)=> setAssunto(e.target.value)}/>
                <input className="p-3 text-base border border-gray-300 rounded-md w-[700px] resize-none ml-[155px]" placeholder="Dúvidas ou Comentários" value={mensagem} onChange={(e)=> setMensagem(e.target.value)}/>
                <button className="bg-black text-white p-2.5 text-base w-[150px] border-none rounded-md cursor-pointer ml-[705px] mt-4">Enviar</button>
            </form>
        </Container>
    )
}