import styled from "styled-components";

export const Main = styled.main`
    background-color: black;
    color: white;
    align-items: center;
    height: 100vh;
`;
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: #000;
    padding: 1rem 2rem;
    width: 100%;
    z-index: 10;

    .menu-container {
        cursor: pointer;
        display: block;
    }

    .logo {
        margin: 0 auto;
        width: 180px;  // Tamanho ajustado para a logo
        max-width: 200px;  // Máximo tamanho para evitar excessos
    }

    @media (max-width: 992px) {
        .menu-container {
            display: block;
        }

        .logo {
            width: 100px;  // Logo menor em telas pequenas
        }
    }
`;





export const Dropdown = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px;
    padding: 0.5rem 0;
    z-index: 20;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
        display: flex;
        flex-direction: column; /* Exibe os itens do menu em coluna */
        gap: 20px;
        width: 100%;
    }

    li {
        padding: 0.4rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border: 1px solid #000;
        border-radius: 4px;
        margin: 0.3rem auto;
    }

    @media (max-width: 992px) {
        ul {
            gap: 10px;
            width: 100%; /* O menu ocupa toda a largura em telas pequenas */
        }
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    z-index: 15;
`;


export const Section = styled.section`
    display: flex;
    align-items: center;
    gap: 200px;
    margin-top: 10px;

    img {
        width: 100%; /* Faz a imagem ocupar 100% da largura disponível */
        max-width: 450px; /* Limita a largura máxima da imagem */
        height: auto; /* Mantém a proporção da imagem */
    }

    @media (max-width: 992px) {
        flex-direction: column;
        gap: 30px;

        img {
            max-width: 350px; /* Ajusta a largura da imagem para telas menores */
        }
    }
`;


export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    gap: 25px;
    margin-top: 50px;

`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 2rem;

  span {
    color: #E5B43B; /* Cor do "fazemos?" */
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha os elementos na diagonal */
  gap: 4rem;
  max-width: 800px;
  position: relative;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


export const FeatureContent = styled.div`
  text-align: left;

  h3 {
    font-size: 1.5rem;
    color: #E5B43B; /* Títulos das features */
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 0;
  }
`;



export const PageMap = styled.main`
  background-color: #E5B43B;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

export const SectionPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 600px;
  text-align: left; /* Definindo alinhamento à esquerda por padrão */

  h1 {
    font-size: 2rem; /* Ajustando o tamanho do título */
  }

  p {
    font-size: 18px; /* Ajustando o tamanho do texto */
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export const PageParceiros = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Ajuste para que o conteúdo fique no topo */
  align-items: center;
  padding: 20px;

  @media (max-width: 992px) {
    padding: 15px;
  }

  @media (max-width: 430px) {
    padding: 10px;
  }
`;

export const DivConteud = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 992px) {
    justify-content: center;
    margin-top: 30px;
  }

  @media (max-width: 430px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const Conteud = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: right;
  margin-bottom: 40px; /* Ajuste na distância entre o texto e as imagens */

  span {
    color: #E5B43B;
  }

  @media (max-width: 992px) {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 30px; /* Distância ajustada no responsivo */
  }

  @media (max-width: 430px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px; /* Distância ajustada no responsivo */
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 992px) {
    gap: 40px;
    margin-top: 30px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    margin-top: 20px;
  }
`;

export const LogoImage = styled.div`
  max-width: 220px;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-width: 220px;
  }

  @media (max-width: 430px) {
    max-width: 120px;
  }
`;





export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #E5B43B;
  padding: 3rem;
  margin-top: 200px;
  gap: 3rem;

  /* Tela média e grande (acima de 992px) - form ao lado do painel esquerdo */
  @media (max-width: 992px) {
    flex-direction: column; /* Formulário vai para baixo na tela pequena */
    padding: 2rem;
    margin-top: 100px;
  }

  @media (max-width: 430px) {
    margin-top: 80px;
    padding: 1rem;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30%; /* Limita o painel esquerdo */

  @media (max-width: 992px) {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 430px) {
    width: 100%;
    align-items: center;
  }
`;

export const TitleDuvida = styled.h1`
  font-size: 1.8rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: 992px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 430px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.8rem 1rem;
  background-color: #E5B43B;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  gap: 5px;

  @media (max-width: 430px) {
    font-size: 0.9rem;
    padding: 0.7rem 0.9rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 70%; /* Ajuste para preencher a largura restante */
  
  @media (max-width: 992px) {
    width: 100%; /* Quando a tela for pequena, o formulário ocupa toda a largura */
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%; 
  margin-top: 80px;
  margin-left: 15px;
  
`;

export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  width: 700px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 155px;

 
`;

export const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 700px;
  resize: none;
  margin-left: 155px;


`;

export const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.6rem;
  font-size: 1rem;
  width: 150px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 705px;
  margin-top: 15px;
 
`;