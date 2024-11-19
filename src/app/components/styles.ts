import styled from "styled-components";

export const Main = styled.main`
    background-color: black;
    color: white;
    align-items: center;
    height: 100vh;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    padding: 1rem 0; 

`

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
  gap: 15px;
`
