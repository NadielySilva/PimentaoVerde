import React, { Component } from "react";

//importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/Main"


//importing assets


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
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;

// https://codepen.io/mutedblues/pen/MmPNPG?editors=1100
// https://codepen.io/erikterwan/pen/EVzeRP?editors=1000