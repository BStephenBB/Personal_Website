import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const theme = {
  headerFont: "Rajdhani",
  bodyFont: "Open Sans",
  //colors:
  mainColor: "#5680e9",
  compColor: "#6257E5",
  white: "#fff",
  black: "#000"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
