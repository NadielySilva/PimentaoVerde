import React from "react";

//importing components


//importing assets
import myCow from '../../assets/cow.svg'

//importing style
import styled from "styled-components";

const Container = styled.div`
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

export const HowItWorks = () =>{

    return(
        <Container>
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
        </Container>
    )

};

export default HowItWorks;