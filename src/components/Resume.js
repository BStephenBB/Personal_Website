import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import { H2Alt } from "./Headers";

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  padding-top: 10vh;
`;

const Glow = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
`;
const DownloadBtn = styled.a`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-family: ${props => props.theme.headerFont}, sans-serif;
  font-size: 24px;
  text-decoration: none;
  box-sizing: border-box;
  background: linear-gradient(
    90deg,
    ${props => props.theme.mainColor},
    ${props => props.theme.compColor},
    ${props => props.theme.mainColor}
  );
  background-size: 400%;
  border-radius: 30px;
  &:hover {
    animation: ${Glow} 6s linear infinite;
    cursor: pointer;
    &:before {
      filter: blur(10px);
      opacity: 1;
      animation: ${Glow} 6s linear infinite;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(
      90deg,
      ${props => props.theme.mainColor},
      ${props => props.theme.compColor},
      ${props => props.theme.mainColor}
    );
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }
`;

const BtnWrapper = styled.div`
  width: 100px;
  height: 60px;
  margin: 0 auto;
  margin: 5vh auto 10vh auto;
`;

export default class Resume extends Component {
  render() {
    return (
      <Wrapper id="resume">
        <H2Alt>Download My Resume</H2Alt>
        <BtnWrapper>
          <DownloadBtn href="../resume.pdf" download>
            Resume
          </DownloadBtn>
        </BtnWrapper>
      </Wrapper>
    );
  }
}
