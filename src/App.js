import React, { Component } from "react";

//importing components
import Header from "./components/Header";
import Main from "./components/Main";
import Carousel, { CarouselItem } from "./components/Main/Carousel";
import Footer from "./components/Footer";
import CircleButton from "./components/CircleButton";

//importing assets
import myCow from "./assets/cow.svg"

//importing style
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
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
        <CircleButton></CircleButton>
        <Footer/>
      </div>
    );
  }
}

export default App;
