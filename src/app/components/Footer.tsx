import Image from "next/image";
import logo from '../../images/logo-white.png';
import emailIcon from '../../images/email.png'; 
import phoneIcon from '../../images/phone-call.png'; 
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto items-center">
          <div className="mb-6 md:mb-0 ml-5">
            <Image src={logo} alt="Logo Electry" width={150} />
          </div>
  
            <div className="text-center md:text-left md:mb-10 ml-5">
                <h3 className="text-lg font-bold mb-2">Atendimentos ao cliente</h3>
                    <ul>
                        <li className="flex items-center justify-center md:justify-start mb-2">
                            <Image src={emailIcon} alt="Ícone de E-mail" width={20} height={20} className="mr-2" />
                            <a href="mailto:electry.energy7@gmail.com" className="text-gray-400 hover:text-white">
                                electry.energy7@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                            <Image src={phoneIcon} alt="Ícone de Telefone" width={20} height={20} className="mr-2" />
                            <a href="tel:08008871" className="text-gray-400 hover:text-white">
                                0800-88-71
                            </a>
                        </li>
                    </ul>
            </div>
  
          {/* Sobre Nós */}
          <div className="text-center md:text-left ml-5">
            <h3 className="text-lg font-bold mb-2">Conheça os criadores Electry</h3>
            <ul>
              <li>
               <Link href={'/integrantes'} className="text-gray-400 hover:text-white">Sobre Nós</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }