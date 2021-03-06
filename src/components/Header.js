import React from "react";
import styled from "styled-components";

//importing components
import PrimaryTransparentSmallBtn from '../components/Buttons/PrimaryTransparentSmall';
import BuyContainedSmallBtn from '../components/Buttons/BuyContainedSmall';

//importing assets
import myLogoImg from '../assets/cow.svg';
// import myContacts from '../assets/messageDarkGreen';
// import myUser from '../assets/userDarkGreen';
import myCart from '../assets/CartShoppingDarkGreen.png';




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
  width: 15vw;
  height 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  };
  
  &:hover {
    background-color: #d7e3df;
    cursor: pointer;
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

const HeaderImg = styled.img`
  width: 5vw;
  height: 5vh;
`;

const HeaderPngImg = styled.img`
  width: 2vw;
  height: 3.6vh;
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
      <PrimaryTransparentSmallBtn><HeaderImg src={myLogoImg}/></PrimaryTransparentSmallBtn>
      <PrimaryTransparentSmallBtn><HeaderImg src={myLogoImg}/></PrimaryTransparentSmallBtn>
      <BuyContainedSmallBtn><HeaderPngImg src={myCart}/></BuyContainedSmallBtn>
    </Container>
  );
}

export default Header;
