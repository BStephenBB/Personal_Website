import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  padding-bottom: 10vh;
`;

const LogoContainer = styled.div`
  text-align: center;
`;

const CircleLogo = styled.img`
  text-align: center;
  width: 500px;
  margin: 0 auto;
  margin-top: -250px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const About = styled.p`
  font-family: ${props => props.theme.bodyFont}, sans-serif;
  font-size: 1.25rem;
  text-align: center;
  max-width: 450px;
  margin: 10vh auto 0 auto;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export default class BodyHeader extends Component {
  render() {
    return (
      <Wrapper id="about">
        <LogoContainer>
          <CircleLogo src="../img/circleLogo.svg" alt="Stephen's logo" />
        </LogoContainer>
        <About>
          Welcome. I'm a front end engineer based in the Bay Area. I have a
          passion for designing and developing beautiful, responsive websites.
        </About>
      </Wrapper>
    );
  }
}
