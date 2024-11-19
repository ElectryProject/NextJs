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
    }

    .logo {
        margin: 0 auto; /* Centraliza a logo no Header */
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 0; /* Começa no topo da página */
    left: 0;
    width: 100%;
    height: 20%;
    background-color: #000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px; /* Apenas as bordas inferiores são arredondadas */
    padding: 0.5rem 0; /* Espaçamento menor */
    z-index: 20;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
        width: 100px;
        display: flex;
        gap: 20px;
        margin-left: 700px;

        li {
            padding: 0.4rem 1rem; /* Botões menores */
            font-size: 0.9rem; /* Fonte reduzida */
            cursor: pointer;
            transition: background-color 0.3s ease;
            border: 1px solid #000; /* Adiciona borda para destacar os botões */
            border-radius: 4px; /* Bordas arredondadas */
            margin: 0.3rem auto; /* Espaçamento vertical */

          
        }
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    z-index: 15;
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    gap: 200px;
    margin-top: 10px;

`

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

export const Feature = styled.div<{ offsetX: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: translateX(${(props) => props.offsetX}); /* Posiciona na diagonal */
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
  align-items: center;

`

export const SectionPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 250px;

`

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 600px;
`

export const PageParceiros = styled.main`
  height: 80vh;
  align-items: center;

`

export const DivConteud = styled.div`
  width: 500px;
  display: flex;
  margin-left: 980px;
  margin-top: 50px;
`
export const Conteud = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: right;

  span {
    color: #E5B43B; 
  }

`

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #E5B43B;
  padding: 2rem;
  margin-top: 200px;
  gap: 3rem;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 30%; /* Limita o painel esquerdo */
`;

export const TitleDuvida = styled.h1`
  font-size: 1.8rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: 500;
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

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%; 
  margin-top: 80px;
  margin-left: 2rem;
  
`;

export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  width: 700px;
  border: 1px solid #ccc;
  border-radius: 4px;

 
`;

export const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 700px;
  resize: none;


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
  margin-left: 300px;
  margin-top: 15px;
 
`;