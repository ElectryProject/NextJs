"use client"
import Image from "next/image";
import { Feature, FeatureContent,  PageContainer,  SectionContainer,  Title } from "./styles";
import iconColeta from '../../images/icone-coleta.png'
import iconRecompensa from '../../images/icone-recompensa.png'
import iconEnergia from '../../images/icone-energia.png'

export default function SectionInform(){
    return(
        <PageContainer>
            <Title>
                O que <span>fazemos?</span>
            </Title>
            <SectionContainer >
                <Feature offsetX='0%'>
                    <Image src={iconColeta} alt="ícone coleta"/>
                    <FeatureContent>
                        <h3>Coleta Inteligente</h3>
                        <p>Implementamos pontos de coleta em locais estratégicos,
                            garantindo que você nunca precise pensar duas vezes sobre onde
                            levar seu lixo eletrônico.</p>
                    </FeatureContent>
                </Feature>
                <Feature offsetX='10%'>
                    <Image src={iconRecompensa} alt="ícone recompensa" />
                    <FeatureContent>
                        <h3>Recompensa</h3>
                        <p>Os descartes geram pontuações acumulativas que poderão ser
                            trocadas por equipamentos de instalação das novas energias em
                            sua casa!</p>
                    </FeatureContent>
                </Feature>
                <Feature offsetX='20%'>
                    <Image src={iconEnergia} alt="ícone energia"/>
                    <FeatureContent>
                        <h3>Energia Sustentável</h3>
                        <p>Todo resíduo coletado contribui para o financiamento de fontes
                            de energia renováveis, como solar e eólica. Vamos fazer a
                            diferença juntos!</p>
                    </FeatureContent>
                </Feature>
            </SectionContainer>
        </PageContainer>

    )
}