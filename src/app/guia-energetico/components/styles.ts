import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  background-color: #d4a125; /* Cor de fundo amarela */
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 50px;
  list-style-type: none;
  font-weight: 500;
`;



export const PointsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  
  img {
    margin-left: 5px;
  }
`;