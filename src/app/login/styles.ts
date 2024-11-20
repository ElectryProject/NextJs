import styled from 'styled-components';


export const Main = styled.main`
    height: 100vh;
    background-color: #E5B43B;
    justify-content: center;
    display: flex;
    align-items: center;
`

export const LoginContainer = styled.div`
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;


export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 5px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 20%;
`

export const Image = styled.image`
    width: 100%;

`

export const Banner = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #4caf50;
  color: white;
  text-align: center;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

