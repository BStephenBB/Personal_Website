import React, { Component } from "react";
import styled from "styled-components";

import { H1, H3 } from "./Headers";
import Navbar from "./Navbar";

const Wrapper = styled.div`
  background-color: ${props => props.theme.mainColor};
  padding-bottom: 54.4vh;
  @media (max-width: 500px) {
    padding-bottom: 20vh;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <H1>I'm Stephen.</H1>
        <H3>A web developer</H3>
      </Wrapper>
    );
  }
}
