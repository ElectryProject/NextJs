"use client"
import Image from 'next/image';
import logo from '../../images/logo-white.png';
import sol from '../../images/sol.jpg';
import { Header, Main, Section, Text } from './styles';


export default function Banner() {
    return (
        <Main>
            <Header>
                <Image src={logo} alt='Logo'/>
            </Header>
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
