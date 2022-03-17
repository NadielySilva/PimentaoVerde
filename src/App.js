import React, { Component } from "react";

//importing components
import Header from "./components/Header";
import Main from "./components/Main";
import Carousel, { CarouselItem } from "./components/Main/Carousel";
import Footer from "./components/Footer";
import PrimaryOutlinedSmallBtn from "./components/Buttons/PrimaryOutlinedSmall";
import PrimaryOutlinedMediumBtn from "./components/Buttons/PrimaryOutlinedMedium";
import PrimaryOutlinedBigBtn from "./components/Buttons/PrimaryOutlinedBig";

import PrimaryTransparentSmallBtn from "./components/Buttons/PrimaryTransparentSmall";
import PrimaryTransparentMediumBtn from "./components/Buttons/PrimaryTransparentMedium";
import PrimaryTransparentBigBtn from "./components/Buttons/PrimaryTransparentBig";

import BuyContainedSmallBtn from "./components/Buttons/BuyContainedSmall";
import BuyContainedMediumBtn from "./components/Buttons/BuyContainedMedium";
import BuyContainedBigBtn from "./components/Buttons/BuyContainedBig";
import BuyOutlinedSmallBtn from "./components/Buttons/BuyOutlinedSmall";
import BuyOutlinedMediumBtn from "./components/Buttons/BuyOutlinedMedium";
import BuyOutlinedBigBtn from "./components/Buttons/BuyOutlinedBig";
import PrimaryContainedSmallBtn from "./components/Buttons/PrimaryContainedSmall";
import PrimaryContainedMediumBtn from "./components/Buttons/PrimaryContainedMedium";
import PrimaryContainedBigBtn from "./components/Buttons/PrimaryContainedBig";


//importing assets
import myCow from "./assets/cow.svg"

//importing style
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const BtnImg = styled.img`
  width: 25px;
  height: 25px;
  padding: 0.125vh; 
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header/>
        {/* <Main/> */}
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>        
        <Footer/>
      </div>
    );
  }
}

export default App;
