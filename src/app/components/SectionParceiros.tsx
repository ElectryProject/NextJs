'use client';
import logoSap from '../../images/logo-sap.png';
import logoFia from '../../images/logo-fia.png';
import logoMahindra from '../../images/logo-mahindra.png';
import logoUltragaz from '../../images/logo-ultragaz.png';
import logoUltracargo from '../../images/logo-ultracargo.png';
import Image from 'next/image';
import { Conteud, DivConteud, PageParceiros, LogosContainer, LogoImage } from './styles';

export default function SectionParceiros() {
  return (
    <PageParceiros>
      <DivConteud>
        <Conteud>
          Parceria com <span>empresas</span> renomadas em todo o <span>Brasil</span>.
        </Conteud>
      </DivConteud>
      
      <LogosContainer>
        <LogoImage>
          <Image src={logoSap} alt="Logo SAP" />
        </LogoImage>
        <LogoImage>
          <Image src={logoFia} alt="Logo FIA" />
        </LogoImage>
        <LogoImage>
          <Image src={logoMahindra} alt="Logo Mahindra" />
        </LogoImage>
      </LogosContainer>

      <LogosContainer>
        <LogoImage>
          <Image src={logoUltragaz} alt="Logo Ultragaz" />
        </LogoImage>
        <LogoImage>
          <Image src={logoUltracargo} alt="Logo Ultracargo" />
        </LogoImage>
      </LogosContainer>
    </PageParceiros>
  );
}
