"use client"
import Image from 'next/image'
import celular from '../../images/celular-mapa.png'
import { DivText, PageMap, SectionPage } from './styles'

export default function SectionMapa(){
    return(
        <PageMap>
            <SectionPage>
                <DivText>
                    <h1 className='font-bold text-[2rem]'>Encontre Pontos de Coleta Próximos!</h1>
                    <p>Para facilitar o descarte de eletrônicos e eletrodomésticos, criamos pontos de coleta pela cidade</p>
                    <p>Contribua para um futuro sustentável e ganhe recompensas ao descartar de forma consciente.</p>
                </DivText>
                <div>
                    <Image src={celular} alt='celular com mapa' height={500}/>
                </div>
            </SectionPage>
        </PageMap>
    )
}