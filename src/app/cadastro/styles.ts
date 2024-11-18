import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 50px;
  background-color: #E5B43B; /* Cor de fundo amarela */
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 600px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 16px;
  background-color: #E5B43B; /* Cor de fundo dos inputs */
  color: #000; /* Cor do texto */
`;


export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #000;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 10px;
  width: 229px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 20%;
`;