import React, { Component } from "react";

//importing components
import { Carousel, CarouselItem } from "./Highlights.js";
import { HowItWorks } from "./HowItWorks.js";
import { Sell } from "./Sell.js";
import { TCarousel, TCarouselItem } from "./Testemonials"


//importing assets
import myMeal from '../../assets/MarmitaVegana.png'
import myJuice from '../../assets/Sucos.png'
import myCow from '../../assets/cow.svg'
import PrimaryContainedMediumBtn from '../Buttons/PrimaryContainedMedium'
import PrimaryContainedBigBtn from '../Buttons/PrimaryContainedBig'
import IconImg from '../IconImg'
import myProfilePic01 from '../../assets/ProfilePic01.jpg';
import myProfilePic02 from '../../assets/ProfilePic02.jpg';
import myProfilePic03 from '../../assets/ProfilePic03.jpg';
import myProfilePic04 from '../../assets/ProfilePic04.jpg';
import myProfilePic05 from '../../assets/ProfilePic05.jpg';
import myProfilePic06 from '../../assets/ProfilePic06.jpg';

//importing style
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Fredoka', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const CarouselBckgrdImg = styled.img`
    width: auto;
    height: 40vh;
`;

const TContainer = styled.div`
    width: 45vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Comment = styled.div`
    text-align: center;
    width: 45vw;
    height: 28vh;
    display: flex;
    flex-direction: column;
    
`;

const ProfileImg = styled.img`
    width: 10vw;
    height: 18vh;
    border-radius: 20px;
    object-fit: cover;
`;

class Main extends Component{

    render(){
        return(
            <>
                <GlobalStyle/>
                <Carousel>
                    <CarouselItem>
                        <CarouselBckgrdImg src={myMeal}/>
                        <PrimaryContainedBigBtn>
                            <IconImg src={myCow}/>
                            <p>Conheça o Cardápio</p>
                        </PrimaryContainedBigBtn>
                    </CarouselItem>
                    <CarouselItem>
                        <CarouselBckgrdImg src={myJuice}/>
                        <PrimaryContainedBigBtn>
                            <IconImg src={myCow}/>
                            <p>Comece a compartilhar</p>
                        </PrimaryContainedBigBtn>
                    </CarouselItem>
                </Carousel>
                <HowItWorks/>
                <Sell/>
                    <TCarousel>
                        <TCarouselItem>
                            <h2>Quem provou, falou</h2>
                        </TCarouselItem>
                        <TCarouselItem>
                            <TContainer>
                                <Comment>
                                    <p>Sapien imperdiet duis integer quis blandit egestas urna netus eros est nulla vitae in orci, ultrices bibendum amet torquent pharetra accumsan vestibulum libero hendrerit quis cursus quam.
                                    </p>
                                </Comment>
                                <div>
                                    <ProfileImg src={myProfilePic01}/>
                                </div>
                            </TContainer>
                        </TCarouselItem>
                        <TCarouselItem>Item 1</TCarouselItem>
                        <TCarouselItem>Item 1</TCarouselItem>
                    </TCarousel>
            </>
        )
    }
}

export default Main;