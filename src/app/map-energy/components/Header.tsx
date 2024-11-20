"use client"
import Image from "next/image";
import { HeaderContainer, NavLinks, PointsButton } from "../../guia-energetico/components/styles";
import logo from '../../../images/logo (2).png'
import moeda from '../../../images/moedas.png'
import Link from "next/link";






export default function Header(){
    return(
        <HeaderContainer>
            <Image src={logo} alt='Logo Electry' height={30}/>
            <NavLinks>
                <li><Link className="hover:underline" href={'/guia-energetico'}>Guia Energético</Link></li>
                <li><Link className="hover:underline" href={'/map-energy'}>MapEnergy</Link></li>
                <li><Link className="hover:underline" href={'/token-credit'}>Token Credit</Link></li>
                <li><Link className="hover:underline" href={'/loja-energia'}>Loja de Energia</Link></li>
                <li><Link className="hover:underline" href={'/integrantes'}>Sobre Nós</Link></li>
            </NavLinks>
            <PointsButton>
                10 pontos
                <Image src={moeda} alt='Ícone de moedas' height={30}/>
            </PointsButton>
        </HeaderContainer>      
    )
}