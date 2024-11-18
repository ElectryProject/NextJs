"use client"
import seta from '../../images/seta.png'

import React, { useState } from "react"
import { Button, CheckboxContainer, Footer, LoginContainer, Main, Title } from "./styles"
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@/context'
import { useRouter } from 'next/navigation'



export default function Login(){
    const[showPassword, setShowPassword] = useState(false)
    const{setName} = useUser();
    const[inputName, setInputName] = useState("");

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) =>{
      e.preventDefault();
      setName(inputName);
      router.push("/guia-energetico");
    };

    return(
    <Main>
    <LoginContainer>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Title>Login</Title>
        <input className="p-4 w-80 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type="text" placeholder="Username" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
        <input className="p-4 border border-[#333] rounded-md text-base bg-[#E5B43B] text-black" type={showPassword ? 'text' : 'password'} placeholder="Senha" />
        <CheckboxContainer>
          <input
            type="checkbox"
            id="showPassword"
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <label htmlFor="showPassword">Mostrar senha?</label>
        </CheckboxContainer>
        <Button type="submit">Entrar</Button>
      </form>
    </LoginContainer>
    <Footer>
        <Link href={'/'}><Image className='w-7' src={seta} alt='Botão de Voltar'/></Link>
    </Footer>
    </Main>
    
    )
}