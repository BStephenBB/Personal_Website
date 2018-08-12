import React, { Component } from "react";
import styled from "styled-components";

import { H2Alt } from "./Headers";

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
`;

const GridContainer = styled.div`
  max-width: 900px;
  margin: 10vh auto 10vh auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(6, auto);
  grid-row-gap: 0;
  grid-column-gap: 5vw;
  justify-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    margin: 5vh auto 5vh auto;
  }
`;

const DiagramImg = styled.img`
  width: 100%;
  height: auto;
`;
const DiagramBtn = styled.div`
  font-family: ${props => props.theme.headerFont}, sans-serif;
  font-size: 1 rem;
  bottom: 1.6%;
  left: 52.5%;
  width: 90px;
  text-align: center;
  border: 2px solid ${props => props.theme.mainColor};
  height: 25px;
  line-height: 25px;
  position: absolute;
  border-radius: 20px;
  z-index: 0;
  color: black;
  background-color: white;
  user-select: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${props => props.theme.compColor} inset,
      0 0 22px 2px ${props => props.theme.compColor};
    border: 2px solid ${props => props.theme.compColor};
  }
  &:after {
    content: "+";
    margin-left: 4px;
  }
`;

const DiagramBtnAlt = DiagramBtn.extend`
  left: 22.5%;
`;

const SkillsTxt1 = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  margin-top: 3.75vh;
  margin-bottom: 5vh;
  @media (max-width: 900px) {
    margin-top: 0vh;
    margin-bottom: 5vh;
  }
`;
const SkillsTxt2 = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  margin-top: 3.75vh;
  margin-bottom: 5vh;
  @media (max-width: 900px) {
    margin-top: 0vh;
    margin-bottom: 5vh;
  }
`;
const SkillsTxt3 = styled.div`
  grid-column: 1 / 3;
  grid-row: 6 / 7;
  margin-top: 3.75vh;
  margin-bottom: 5vh;
  @media (max-width: 900px) {
    margin-top: 0vh;
    margin-bottom: 5vh;
  }
`;

const Diagram1 = styled.div`
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Diagram2 = styled.div`
  position: relative;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Diagram3 = styled.div`
  position: relative;
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Description1 = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  @media (max-width: 900px) {
    grid-column: 1 / 3;
  }
`;
const Description2 = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  @media (max-width: 900px) {
    grid-column: 1 / 3;
  }
`;
const Description3 = styled.div`
  grid-column: 2 / 3;
  grid-row: 5 / 6;
  @media (max-width: 900px) {
    grid-column: 1 / 3;
  }
`;
const DescriptionTitle = styled.h2`
  text-align: left;
  font-size: 2rem;
  font-family: ${props => props.theme.headerFont}, sans-serif;
  margin: 0;
  margin-bottom: 2vh;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 1.75rem;
  }
`;
const DescriptionText = styled.p`
  text-align: left;
  font-size: 1rem;
  margin: 0;
  font-family: ${props => props.theme.bodyFont}, sans-serif;
  @media (max-width: 900px) {
    margin: 1.25rem;
  }
`;

const SkillListBin = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 100%;
  margin: 0;
  width: 900px;
  justify-items: center;
`;

const SkillCol = styled.div`
  /* add later */
`;

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const LI = styled.li`
  color: black;
  font-family: ${props => props.theme.headerFont}, sans-serif;
  font-size: 1.25rem;
  padding: 0.8rem;
`;

const Check = styled.i`
  font-size: 1rem;
  margin: 0;
  margin-right: 6px;
  color: hsla(223, 90%, 50%, 1);
  /* color: ${props => props.theme.mainColor}; */
`;

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded1: false,
      isExpanded2: false,
      isExpanded3: false
    };
  }

  handleToggle1(e) {
    e.preventDefault();
    this.setState({
      isExpanded1: !this.state.isExpanded1,
      height1: this.lalala.clientHeight
    });
  }
  handleToggle2(e) {
    e.preventDefault();
    this.setState({
      isExpanded2: !this.state.isExpanded2,
      height2: this.lalala.clientHeight
    });
  }
  handleToggle3(e) {
    e.preventDefault();
    this.setState({
      isExpanded3: !this.state.isExpanded3,
      height3: this.lalala.clientHeight
    });
  }

  render() {
    const {
      isExpanded1,
      isExpanded2,
      isExpanded3,
      height1,
      height2,
      height3
    } = this.state;
    const currentHeight1 = isExpanded1 ? height1 : 0;
    const currentHeight2 = isExpanded2 ? height2 : 0;
    const currentHeight3 = isExpanded3 ? height3 : 0;
    return (
      <Wrapper>
        <H2Alt>What I can do.</H2Alt>
        <GridContainer>
          <Diagram1>
            <DiagramImg src="../img/illustration1.svg" />
            <DiagramBtn
              onClick={e => this.handleToggle1(e)}
              className={`${isExpanded1 ? "is-expanded" : ""}`}
            >
              My Skills
            </DiagramBtn>
          </Diagram1>
          <Description1>
            <DescriptionTitle>Front End Development</DescriptionTitle>
            <DescriptionText>
              I have a deep understanding of core front end technologies, as and
              experience with some of the most useful and powerful front end
              libraries and frameworks. While I particularly enjoy React due to
              it's lightweight and performant nature, I'm always exploring and
              open to learning new technologies.
            </DescriptionText>
          </Description1>
          <SkillsTxt1
            className={`panel-collapse ${isExpanded1 ? "is-expanded" : ""}`}
            style={{ height: currentHeight1 + "px" }}
          >
            <SkillListBin
              innerRef={frontSkills => {
                this.lalala = frontSkills;
              }}
            >
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    HTML
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    CSS
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    React
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Webpack
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    SASS / SCSS
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Javascript / ES6
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    jQuery
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Bootstrap
                  </LI>
                </UL>
              </SkillCol>
            </SkillListBin>
          </SkillsTxt1>

          <Diagram2>
            <DiagramImg src="../img/illustration2.svg" />
            <DiagramBtnAlt
              onClick={e => this.handleToggle2(e)}
              className={`${isExpanded2 ? "is-expanded" : ""}`}
            >
              My Skills
            </DiagramBtnAlt>
          </Diagram2>
          <Description2>
            <DescriptionTitle>Back End Development</DescriptionTitle>
            <DescriptionText>
              While I specialize in front end development, I also have a good
              understanding of, and experience with back end development. I can
              with creating and test APIs, protect routes/endpoints, manimpulate
              relational and non-relational databases, and utilize middleware.
              For secifics, see my skills!
            </DescriptionText>
          </Description2>

          <SkillsTxt2
            className={`panel-collapse ${isExpanded2 ? "is-expanded" : ""}`}
            style={{ height: currentHeight2 + "px" }}
          >
            <SkillListBin
              innerRef={backSkills => {
                this.lalala = backSkills;
              }}
            >
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Node.js
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Express
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Redux
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Axios
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Python
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    JSON Web Tokens
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    MongoDB
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    API Construction
                  </LI>
                </UL>
              </SkillCol>
            </SkillListBin>
          </SkillsTxt2>

          <Diagram3>
            <DiagramImg src="../img/illustration3.svg" />
            <DiagramBtn
              onClick={e => this.handleToggle3(e)}
              className={`${isExpanded3 ? "is-expanded" : ""}`}
            >
              My Skills
            </DiagramBtn>
          </Diagram3>
          <Description3>
            <DescriptionTitle>Everything Else</DescriptionTitle>
            <DescriptionText>
              Web development is one of the most diverse and multidisciplinary
              fields -- there are many valuable "non-coding" skills that are
              crucial to web developmet. I have experience with editing images,
              version control, SLL, as well as many other skills that don't
              explicitly involve programming.
            </DescriptionText>
          </Description3>
          <SkillsTxt3
            className={`panel-collapse ${isExpanded3 ? "is-expanded" : ""}`}
            style={{ height: currentHeight3 + "px" }}
          >
            <SkillListBin
              innerRef={otherSkills => {
                this.lalala = otherSkills;
              }}
            >
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Version Control / git
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Responsive Design
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    NPM
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Axios
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Image Editing
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    Agile Methodology
                  </LI>
                </UL>
              </SkillCol>
              <SkillCol>
                <UL>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    UI / UX
                  </LI>
                  <LI>
                    <Check className={"far fa-check-circle"} />
                    SSL
                  </LI>
                </UL>
              </SkillCol>
            </SkillListBin>
          </SkillsTxt3>
        </GridContainer>
      </Wrapper>
    );
  }
}

export default Skills;
