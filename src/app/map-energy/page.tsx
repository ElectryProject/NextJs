import Link from "next/link";
import Header from "./components/Header";
import MapsGoogle from "./components/MapsGoogle";
import seta from '../../images/seta.png'
import Image from "next/image";
export default function MapEnergy(){
    return(
        <main>
            <Header/>
            <MapsGoogle/>
            <footer className="mt-10w-full mb-10 left-5">
                <Link href={'/'}><Image className='w-7 mt-5 ml-2' src={seta} alt='Botão de Voltar'/></Link>
            </footer>
        </main>
    )
}