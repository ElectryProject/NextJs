"use client";
import Image from "next/image";
import seta from '../../images/seta.png'
import geradores from '../../images/gerador-eolico.png'
import lampadaSolar from '../../images/lampada-led.png';
import armazenadorBateria from '../../images/armazenador.png'
import tomadaInteligente from '../../images/tomada-inteligente.png'
import purificador from '../../images/purificador-agua.png'
import carregadorSolar from '../../images/carregador-solar.png'
import aquecedor from '../../images/aquecedor-agua.png'
import placaSolar from '../../images/placa-solar.png'
import arCondicionado from '../../images/sistema-arcondicionado.png'
import cooler from '../../images/cooler-solar.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Header from "./components/Header";
 
const Page: React.FC = () => {
    const produtos = [
        { id: 1, titulo: "Geradores Eólicos Domésticos", pontos: 4500, img: geradores },
        { id: 2, titulo: "Lâmpada LED Solar", pontos: 700, img: lampadaSolar },
        { id: 3, titulo: "Armazenador de Bateria Solar", pontos: 400, img: armazenadorBateria },
        { id: 4, titulo: "Tomada Inteligente", pontos: 500, img: tomadaInteligente },
        { id: 5, titulo: "Cooler Ecológico", pontos: 2500, img: cooler },
        { id: 6, titulo: "Purificador De Água Solar", pontos: 150, img: purificador },
        { id: 7, titulo: "Carregador Solar Portátil", pontos: 100, img: carregadorSolar },
        { id: 8, titulo: "Aquecedor De Água Solar", pontos: 600, img: aquecedor },
        { id: 9, titulo: "Placa Solar Doméstica", pontos: 2500, img: placaSolar },
        { id: 10, titulo: "Ar Condicionado Solar", pontos: 10000, img: arCondicionado },
    ];
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
 
    return (
        <div className="min-h-screen bg-yellow-100 flex flex-col font-sans">
            <Header/>
            <main className="flex-grow flex flex-col items-center text-center p-6">
                <h1 className="text-2xl font-bold text-black mb-4">Bem-vindo à nossa Loja!</h1>
                <p className="text-lg text-black mb-8">
                    Troque seus pontos por{" "}
                    <span className="text-yellow-500 font-semibold">equipamentos de energia renovável</span>
                    <br />
                    e faça parte da transição energética.
                </p>
 
                <div className="w-[80%] h-[60vh]">
                    <style>
                        {`
                            .slick-prev:before, .slick-next:before {
                                color: black !important;
                            }
                        `}
                    </style>
                    <Slider {...settings}>
                        {produtos.map((produto) => (
                            <div
                                key={produto.id}
                                className="flex flex-col items-center bg-white p-4 rounded shadow w-60"
                            >
                                <Image
                                    src={produto.img}
                                    alt={produto.titulo}
                                    className="w-full h-40 mb-4"
                                    width={200}
                                    height={150}
                                />
                                <h2 className="text-lg font-bold text-black">{produto.titulo}</h2>
                                <p className="text-yellow-500 font-semibold">{produto.pontos} pontos</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>
            <footer className="fixed bottom-5 left-5 w-1/5">
                <Link href={'/'}><Image className='w-7' src={seta} alt='Botão de Voltar'/></Link>
            </footer>
       
        </div>
    );
};
 
export default Page;
 