import React from "react";

//importing components


//importing assets
import myCow from '../../assets/cow.svg'

//importing style
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const SubContainer = styled.div`
    text-align: center;
    width: 40vw;
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SellImg = styled.img`
    width: 20vw;
    height: 35vh;
`;


export const Sell = () =>{

    return(
        <Container>
            <SubContainer>
                <SellImg src={myCow}/>
                <h2>Ultrices enim a dui feugiat potenti mattis facilisis iaculis netus</h2>
            </SubContainer>
            <SubContainer>
                <p>
                Sapien imperdiet duis integer quis blandit egestas urna netus eros est nulla vitae in orci, ultrices bibendum amet torquent pharetra accumsan vestibulum libero hendrerit quis cursus quam. 
                </p>
            </SubContainer>
        </Container>
    )
};

export default Sell;