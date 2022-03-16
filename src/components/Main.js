import React, { Component } from "react";

//importing style
import styled from "styled-components";

//importing assets
import myCow from '../assets/cow.svg'

const Container = styled.div`
    font-family: 'Fredoka', sans-serif;
    width: 100vw;
    height: 450vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: grey;
`;

const Carroussel = styled.div`
    width: 100vw;
    height: 70vh;
    background-color: aquamarine;
`;

const HowItWorks = styled.div`
    text-align: center;
    width: 100vw;
    height: 70vh;
`;

const Title2 = styled.h2`
    font-family: 'Fredoka', sans-serif;
    font-weight: 500;
    width: 100vw;
    height: 8vh;
`;

const StepByStep = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Step = styled.div`
    text-align: center;
    width: 30vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const StepImg = styled.img`
    width: 10vw;
    height: auto; 
`;

const Title3 = styled.h3`
    font-family: 'Fredoka', sans-serif;
    font-weight: 500;
`;

const Sell = styled.div`
    font-family: 'Fredoka', sans-serif;    
    width: 100vw;
    height: 70vh;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: aquamarine;
`;

const SellImg = styled.img`
    width: 10vw;
    height: auto; 
`;

const Highlights = styled.div`
    width: 100vw;
    height: 70vh;
    background-color: aquamarine;
`;

const Testimony = styled.div`
    width: 100vw;
    height: 70vh;
    background-color: aquamarine;
`;

const Team = styled.div`
    width: 100vw;
    height: 70vh;
    background-color: aquamarine;
`;

export default class Main extends Component{
    render(){
        return(
           <Container>
               <Carroussel>
                   <p>Olá</p>
               </Carroussel>
               <HowItWorks>
                   <Title2>Quer entender como funciona?</Title2>
                   <StepByStep>
                       <Step>
                           <StepImg src={myCow}/>
                           <Title3>Título do Step</Title3>
                           <p>Mi ut curae pellentesque quisque conubia sociosqu, euismod volutpat turpis vel duis, etiam mi fusce primis interdum. quisque platea habitasse iaculis orci adipiscing sagittis, posuere ultricies metus id. </p>
                       </Step>
                       <Step>
                       <StepImg src={myCow}/>
                           <Title3>Título do Step</Title3>
                           <p>Mi ut curae pellentesque quisque conubia sociosqu, euismod volutpat turpis vel duis, etiam mi fusce primis interdum. quisque platea habitasse iaculis orci adipiscing sagittis, posuere ultricies metus id. </p>
                       </Step>
                       <Step>
                       <StepImg src={myCow}/>
                           <Title3>Título do Step</Title3>
                           <p>Mi ut curae pellentesque quisque conubia sociosqu, euismod volutpat turpis vel duis, etiam mi fusce primis interdum. quisque platea habitasse iaculis orci adipiscing sagittis, posuere ultricies metus id. </p>
                       </Step>
                   </StepByStep>
               </HowItWorks>
               <Sell>
                   <SellImg src={myCow}/>
                   <SellImg src={myCow}/>
                   <Title2>Lorem ipsum at iaculis donec et, molestie mattis magna primis</Title2>
                   <p>Id nisi metus nam non rhoncus nam luctus faucibus, magna neque diam himenaeos nisi nam convallis ligula, duis interdum sociosqu nunc augue eu tincidunt. pretium nullam massa nunc quam habitasse ad gravida erat, enim taciti euismod habitant lectus metus inceptos curae, dui tellus duis habitasse sollicitudin augue odio. </p>
               </Sell>
               <Highlights></Highlights>
               <Testimony></Testimony>
               <Team></Team>
           </Container> 
        );
    }

};