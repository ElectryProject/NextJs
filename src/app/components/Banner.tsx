"use client"
import Image from 'next/image';
import logo from '../../images/logo-white.png';
import sol from '../../images/sol.jpg';
import menu from '../../images/icon-menu.png'
import cadastro from '../../images/cadastro (2).png'
import login from '../../images/login (2).png'
import { Backdrop, Dropdown, Header, Main, Section, Text } from './styles';
import { useState } from 'react';
import Link from 'next/link';



export default function Banner() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Main>
            {isMenuOpen && <Backdrop onClick={closeMenu} />} {/* Fecha ao clicar fora */}
            <div className="header-wrapper">
                {isMenuOpen && (
                    <Dropdown>
                        <ul>
                            <li className='flex flex-col justify-center gap-2'><Image src={login} alt='ícone login'width={50}/><Link href={'/login'}>Login</Link></li>
                            <li className='flex flex-col justify-center items-center'><Image className='ml-2' src={cadastro} alt='ícone cadastro' width={50}/><Link href={'/cadastro'}>Cadastro</Link></li>
                        </ul>
                    </Dropdown>
                )}
                <Header>
                    <div className="menu-container" onClick={toggleMenu}>
                        <Image src={menu} alt="Menu" width={30}/>
                    </div>
                    <Image src={logo} alt="Logo" className="logo" width={200}/>
                </Header>
            </div>
            <Section>
                <Text>
                    <h1 className='text-3xl font-bold'>Conheça a verdadeira energia que move o Planeta</h1>
                    <p className='p-2 text-[18px] max-w-[700px]'>Inspirados pelos antigos, movidos pela inovação. A Electry está resgatando o que há de mais puro na energia natural para trazer soluções que respeitem o equilíbrio do planeta.</p>
                </Text>
                <div>
                    <Image src={sol} alt='Sol' width={450}/>
                </div>
            </Section>
        </Main>
    );
}
