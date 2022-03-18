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

const StyledSVG = styled.svg`
    width: 4vw;
    height: 4vh;
    fill: #0d4740;
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
    align-items: center;
`;

const Comment = styled.p`
    text-align: center;
    height: 28vh;
    display: flex;
    flex-direction: column;
    white-space: normal;
`;

const ProfileContainer = styled.div`
    width: 35vw;
    height: 18vh;
    display: flex;
    justify-content: space-evenly;
`;

const ProfileImg = styled.img`
    width: 10vw;
    height: 18vh;
    border-radius: 20px;
    object-fit: cover;
`;

const NameAndRatingContainer = styled.div`
    width: 15vw;
    height: 18vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CommentContainer = styled.div`   
    width: 6vw;
    height: 6.4vh;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background-color: #ffaf47;
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
                                <Comment>Sapien imperdiet duis integer quis blandit egestas urna netus eros est nulla vitae in orci, ultrices bibendum amet torquent pharetra accumsan vestibulum libero hendrerit quis cursus quam.
                                </Comment>                                
                                <ProfileContainer>
                                    <ProfileImg src={myProfilePic01}/>
                                    <NameAndRatingContainer>
                                        <Comment><strong>Stella Figueiredo</strong></Comment>
                                        <CommentContainer>
                                            <Comment>5</Comment>
                                            <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></StyledSVG>
                                        </CommentContainer>
                                    </NameAndRatingContainer>
                                </ProfileContainer>
                            </TContainer>
                        </TCarouselItem>
                        <TCarouselItem>
                        <TContainer>                              
                                <Comment>Sapien imperdiet duis integer quis blandit egestas urna netus eros est nulla vitae in orci, ultrices bibendum amet torquent pharetra accumsan vestibulum libero hendrerit quis cursus quam.
                                </Comment>                                
                                <ProfileContainer>
                                    <ProfileImg src={myProfilePic02}/>
                                    <NameAndRatingContainer>
                                        <Comment><strong>Camila Teresinha Teixeira</strong></Comment>
                                        <CommentContainer>
                                            <Comment>5</Comment>
                                            <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></StyledSVG>
                                        </CommentContainer>
                                    </NameAndRatingContainer>
                                </ProfileContainer>
                            </TContainer>
                        </TCarouselItem>
                        <TCarouselItem>
                        <TContainer>                              
                                <Comment>Sapien imperdiet duis integer quis blandit egestas urna netus eros est nulla vitae in orci, ultrices bibendum amet torquent pharetra accumsan vestibulum libero hendrerit quis cursus quam.
                                </Comment>                                
                                <ProfileContainer>
                                    <ProfileImg src={myProfilePic03}/>
                                    <NameAndRatingContainer>
                                        <Comment><strong>Diego Augusto Vitor Pereira</strong></Comment>
                                        <CommentContainer>
                                            <Comment>5</Comment>
                                            <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></StyledSVG>
                                        </CommentContainer>
                                    </NameAndRatingContainer>
                                </ProfileContainer>
                            </TContainer>
                        </TCarouselItem>
                        <TCarouselItem>
                            <TContainer>                              
                                <Comment>Sapien imperdiet duis integer quis blandit egestas urna netus eros est nulla vitae in orci, ultrices bibendum amet torquent pharetra accumsan vestibulum libero hendrerit quis cursus quam.
                                </Comment>                                
                                <ProfileContainer>
                                    <ProfileImg src={myProfilePic04}/>
                                    <NameAndRatingContainer>
                                        <Comment><strong>Giovanna Antônia Melo</strong></Comment>
                                        <CommentContainer>
                                            <Comment>5</Comment>
                                            <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></StyledSVG>
                                        </CommentContainer>
                                    </NameAndRatingContainer>
                                </ProfileContainer>
                            </TContainer>
                        </TCarouselItem>
                        <TCarouselItem>
                            <TContainer>                              
                                <Comment>Sapien imperdiet duis integer quis blandit egestas urna netus eros est nulla vitae in orci, ultrices bibendum amet torquent pharetra accumsan vestibulum libero hendrerit quis cursus quam.
                                </Comment>                                
                                <ProfileContainer>
                                    <ProfileImg src={myProfilePic05}/>
                                    <NameAndRatingContainer>
                                        <Comment><strong>Kaique Augusto Moraes</strong></Comment>
                                        <CommentContainer>
                                            <Comment>5</Comment>
                                            <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></StyledSVG>
                                        </CommentContainer>
                                    </NameAndRatingContainer>
                                </ProfileContainer>
                            </TContainer>
                        </TCarouselItem>
                        <TCarouselItem>
                            <TContainer>                              
                                <Comment>Sapien imperdiet duis integer quis blandit egestas urna netus eros est nulla vitae in orci, ultrices bibendum amet torquent pharetra accumsan vestibulum libero hendrerit quis cursus quam.
                                </Comment>                                
                                <ProfileContainer>
                                    <ProfileImg src={myProfilePic06}/>
                                    <NameAndRatingContainer>
                                        <Comment><strong>Marcela Isis Lorena Assunção</strong></Comment>
                                        <CommentContainer>
                                            <Comment>5</Comment>
                                            <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></StyledSVG>
                                        </CommentContainer>
                                    </NameAndRatingContainer>
                                </ProfileContainer>
                            </TContainer>
                        </TCarouselItem>
                    </TCarousel>
            </>
        )
    }
}

export default Main;