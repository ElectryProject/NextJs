import Image from "next/image";
import logo from '../../images/logo-white.png'
export default function Footer(){
    return(
        <footer className="bg-black h-50">
            <Image src={logo} alt="Logo" width={200}/>
        </footer>
    )
}