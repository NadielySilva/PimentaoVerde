import React from "react";
import styled from "styled-components";

//importing assets
import myLogoImg from '../assets/cow.svg';


const Container = styled.div`
width: 100vw;
height: 12vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`

const LogoImg = styled.img`
width: 10vw;
height: 10vh;
`;

const Logo = styled.p`
color: #0d4740;
font-size: 1.5em;
font-family: 'Dancing Script', cursive;
`;

const ListItem = styled.li`
  color: #0d4740;
  font-size: 0.5em;
  font-family: 'Fredoka', sans-serif;
  text-transform: uppercase;

  }
  &:hover {
    background-color: #d7e3df;
  }
`;

const List = styled.ul`
  width: 60vw;
  display: flex;
  justify-content: space-around;
  list-style: none;
  color: red;
  font-size: 30px;
`;

function Header() {
  return (
    <Container>
      <LogoImg src={myLogoImg}/>
      <div>
        <Logo>Pimentão</Logo>
        <Logo>Verde</Logo>
      </div>
      <List>
        <ListItem>Cardápio</ListItem>
        <ListItem>Combos</ListItem>
        <ListItem>Planos</ListItem>
        <ListItem>Sobre Nós</ListItem>
      </List>
      <button>Contatos</button>
      <button>Login/Criar Conta</button>
      <button>Carrinho de Compras Aside</button>
    </Container>
  );
}

export default Header;
