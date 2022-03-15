import React, { Component } from "react";

//importing components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
