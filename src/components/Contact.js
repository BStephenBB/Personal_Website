import React, { Component } from "react";
import styled from "styled-components";

import { H2 } from "./Headers";

const Wrapper = styled.div`
  background-color: ${props => props.theme.mainColor};
  padding-top: 10vh;
`;

const ContactText = styled.p`
  font-family: ${props => props.theme.bodyFont}, sans-serif;
  text-align: center;
  max-width: 450px;
  font-size: 1.25rem;
  margin: 5vh auto;
  color: white;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const btnDim = "60px";

const SocialButtons = styled.div`
  height: ${btnDim};
  font-size: 0;
  text-align: center;
  padding-bottom: 5vh;
`;

const iconColor = "#00d4ff";
// const iconColor = "#3df";

const Btn = styled.a`
  cursor: pointer;
  display: inline-block;
  background-color: white;
  width: ${btnDim};
  height: ${btnDim};
  line-height: ${btnDim};
  margin: 0 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
  transition: all 0.32s cubic bezier(0.31, -0.105, 0.43, 1.59);
  &:before {
    content: "";
    background-color: ${iconColor};
    width: 120%;
    height: 120%;
    position: absolute;
    top: 90%;
    left: -110%;
    transform: rotate(45deg);
    transition: all 0.32s cubic-bezier(0.31, -0.105, 0.43, 1.59);
  }
  &:hover:before {
    top: -10%;
    left: -10%;
  }
`;

const GitBtn = Btn.extend`
  @media (max-width: 500px) {
    display: none;
  }
`;

const SocialIcon = styled.i`
  font-size: 30px;
  vertical-align: middle;
  transform: scale(0.85);
  transition: all 0.32s cubic-bezier(0.31, -0.105, 0.43, 1.59);
  color: ${iconColor};
  ${Btn}:hover & {
    color: #fff;
    transform: scale(1);
  }
  ${GitBtn}:hover & {
    color: #fff;
    transform: scale(1);
  }
`;

// const Button = styled.button`
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, 0);
//   display: flex;
//   cursor: pointer;
//   border: 0;
//   background: transparent;
//   outline: 0;
//   overflow: hidden;
// `;

// const BtnDimension = "75px";

// const IconContainer = styled.div`
//   position: relative;
//   background: white;
//   line-height: ${BtnDimension};
//   width: ${BtnDimension};
//   height: ${BtnDimension};
//   text-align: center;
//   color: blue;
//   font-size: 18px;
//   transition: 0.2s color; /*delay for icon color swap */
//   transition: 0.4s border-radius;
//   border-radius: 20%;
//   ${Button}:hover & {
//     color: purple;
//     border-radius: 0;
//     border-top-left-radius: 20%;
//     border-bottom-left-radius: 20%;
//   }
// `;

// const Icon = styled.i`
//   font-size: 2.75rem;
//   line-height: ${BtnDimension};
//   width: ${BtnDimension};
//   height: ${BtnDimension};
//   transition: 0.5s all; /*color change of icon*/
// `;

// const EmailContainer = styled.div`
//   position: relative;
//   width: 0;
//   height: ${BtnDimension};
//   overflow: hidden;
//   font-family: ${props => props.theme.headerFont}, sans-serif;
//   font-size: 1.5rem;
//   background: red;
//   text-align: center;
//   line-height: ${BtnDimension};
//   color: #fff;
//   opacity: 0;
//   transition: 0.3s all; /*animate email container*/
//   border-top-right-radius: 20px;
//   border-bottom-right-radius: 20px;

//   ${Button}:hover & {
//     width: 300px;
//     opacity: 1;
//   }
// `;

// const Email = styled.span`
//   width: 100%;
//   opacity: 0;
//   position: absolute;
//   top: -30px;
//   left: 50%;
//   transform: translateX(-50%);
//   transition: 0.4s all; /*how long it takes for the email to slide in*/
//   ${Button}:hover & {
//     opacity: 1;
//     top: 0;
//   }
// `;

// const BtnWrapper = styled.div`
//   width: 100px;
//   height: 60px;
//   margin: 10vh auto;
// `;

class Contact extends Component {
  render() {
    return (
      <Wrapper id="contact">
        <H2>Contact</H2>
        <ContactText>
          I'm always looking for new opportunities! If you want to hire me,
          collaborate, or just have a chat, shoot me an email or reach out on
          social media.
        </ContactText>
        <SocialButtons>
          <Btn href="mailto:sbrownbourne@gmail.com" target="_blank">
            <SocialIcon className="fa fa-envelope" />
          </Btn>
          <Btn href="https://twitter.com/SBrownBourne" target="_blank">
            <SocialIcon className="fab fa-twitter" />
          </Btn>
          <Btn
            href="https://www.linkedin.com/in/stephen-brown-bourne/"
            target="_blank"
          >
            <SocialIcon className="fab fa-linkedin" />
          </Btn>
          <Btn
            href="https://www.facebook.com/stephen.brownbourne"
            target="_blank"
          >
            <SocialIcon className="fab fa-facebook" />
          </Btn>
          <GitBtn href="https://github.com/BStephenBB" target="_blank">
            <SocialIcon className="fab fa-github" />
          </GitBtn>
        </SocialButtons>
        {/* <BtnWrapper>
          <a href="mailto:sbrownbourne@gmail.com">
            <Button>
              <IconContainer>
                <Icon className="fas fa-envelope" />
              </IconContainer>
              <EmailContainer>
                <Email>sbrownbourne@gmail.com</Email>
              </EmailContainer>
            </Button>
          </a>
        </BtnWrapper> */}
      </Wrapper>
    );
  }
}

export default Contact;
