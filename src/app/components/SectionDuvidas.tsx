"use client"
import iconDuvida from '../../images/icon-duvida.png'
import iconParceria from '../../images/icon-parceria.png'
import iconOportunidade from '../../images/icon-oportunidade.png'
import Image from "next/image";
import { Button, Container, Form, Input, LeftPanel, SubmitButton, Textarea, TitleDuvida } from "./styles";

export default function SectionDuvidas(){
    return(
        <Container>
            <LeftPanel>
                <TitleDuvida>Dúvidas? Fale Conosco</TitleDuvida>
                <Button><Image src={iconDuvida} alt='ícone de dúvida' width={25}/>Dúvidas Frequentes</Button>
                <Button><Image src={iconParceria} alt='ícone de parceria' width={30}/>Parcerias</Button>
                <Button><Image src={iconOportunidade} alt='ícone de oportunidade' width={25}/>Oportunidades Internas</Button>
            </LeftPanel>

            <Form>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Assunto" />
                <Textarea placeholder="Dúvidas ou Comentários" />
                <SubmitButton>Enviar</SubmitButton>
            </Form>
        </Container>
    )
}