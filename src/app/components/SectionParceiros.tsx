"use client"
import logoSap from '../../images/logo-sap.png'
import logoFia from '../../images/logo-fia.png'
import logoMahindra from '../../images/logo-mahindra.png'
import logoUltragaz from '../../images/logo-ultragaz.png'
import logoUltracargo from '../../images/logo-ultracargo.png'
import Image from 'next/image'
import { Conteud, DivConteud, PageParceiros } from './styles'

export default function SectionParceiros(){
    return(
        <PageParceiros>
            <DivConteud>
                <Conteud>Parceria com <span>empresas</span> renomadas em todo o <span>Brasil</span>.</Conteud>
            </DivConteud>
            <div className='flex items-center justify-center mt-10'>
                <Image src={logoSap} alt='Logo SAP'/>
                <Image src={logoFia} alt='Logo FIA'/>
                <Image src={logoMahindra} alt='Logo Mahindra'/>
            </div>
            <div className='flex items-center justify-center gap-52 mt-20'>
                <Image src={logoUltragaz} alt='Logo Ultragaz'/>
                <Image src={logoUltracargo} alt='Logo Ultracargo'/>
            </div>
        </PageParceiros>
    )
}