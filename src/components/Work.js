import React, { Component } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

import { H2 } from "./Headers";

ReactModal.setAppElement("#app");

const WorkDesc = styled.p`
  font-family: ${props => props.theme.bodyFont};
  font-size: 1.25rem;
  max-width: 610px;
  color: white;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  position: relative;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const GithubLink = styled.a`
  color: white;
  text-decoration: none;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 3px;
    right: 0;
    background: #fff;
    transition: width 0.2s ease;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    background: #fff;
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.mainColor};
  padding-bottom: 10vh;
  padding-top: 10vh;
  @media (max-width: 1200px) {
    padding-bottom: 0;
  }
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(3, 47.5vh);
  max-width: 1150px;
  margin: 10vh auto 0 auto;
  @media (max-width: 500px) {
    /* to make the large grids the appropriate size once their picture goes away on smaller screens */
    grid-template-rows: 25vh 47.5vh 25vh;
  }
`;

const ProjectContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: left;
`;

const projRad = "4px";

const LeftContainer = ProjectContainer.extend`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  @media (max-width: 1200px) {
    border-radius: 0;
  }
`;
const RightContainer = ProjectContainer.extend`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  @media (max-width: 1200px) {
    border-radius: 0;
  }
`;
const FullContainer = ProjectContainer.extend`
  grid-column: 1 / 3;
  grid-row: 3 / 4;

  border-bottom-left-radius: ${projRad};
  border-bottom-right-radius: ${projRad};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
  @media (max-width: 1200px) {
    border-radius: 0;
  }
`;
const FullContainerTop = ProjectContainer.extend`
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  border-top-left-radius: ${projRad};
  border-top-right-radius: ${projRad};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
  @media (max-width: 1200px) {
    border-radius: 0;
  }
`;
const InnerImg = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s;
`;
const InnerImg1 = InnerImg.extend`
  background-image: url("../img/LizThumbnail.png");
  ${LeftContainer}:hover & {
    transform: scale(1.05);
  }
`;
const InnerImg2 = InnerImg.extend`
  background-image: url("../img/FortniteMap.png");
  ${RightContainer}:hover & {
    transform: scale(1.05);
  }
`;
const InnerImg3 = InnerImg.extend`
  background-image: url("../img/DevLink.png");
  ${FullContainer}:hover & {
    transform: scale(1.05);
  }
  @media (max-width: 900px) {
    background-image: none;
    background-color: white;
  }
`;
const InnerImg4 = InnerImg.extend`
  background-image: url("../img/amtaf.png");
  ${FullContainerTop}:hover & {
    transform: scale(1.05);
  }
  @media (max-width: 900px) {
    background-image: none;
    background-color: white;
  }
`;

const ProjectTitle = styled.h2`
  position: absolute;
  margin: 0;
  top: 10%;
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.headerFont}, sans-serif;
  font-size: 2.5rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

const ProjectTitle1 = ProjectTitle.extend`
  ${LeftContainer}:hover & {
    transform: translate3d(0, -8px, 0);
  }
`;
const ProjectTitle2 = ProjectTitle.extend`
  ${RightContainer}:hover & {
    transform: translate3d(0, -8px, 0);
  }
`;
const ProjectTitle3 = ProjectTitle.extend`
  ${FullContainer}:hover & {
    transform: translate3d(0, -8px, 0);
  }
`;
const ProjectTitle4 = ProjectTitle.extend`
  color: #fff;
  ${FullContainerTop}:hover & {
    transform: translate3d(0, -8px, 0);
  }
  @media (max-width: 900px) {
    color: ${props => props.theme.black};
  }
`;

const ProjectDescription = styled.p`
  position: absolute;
  transform: translateX(-50%);
  top: 20%;
  left: 50%;
  width: 70%;
  font-family: ${props => props.theme.bodyFont}, sans-serif;
  font-size: 1rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const ProjectDescription1 = ProjectDescription.extend`
  ${LeftContainer}:hover & {
    transform: translate3d(0, 8px, 0) translateX(-50%);
  }
`;
const ProjectDescription2 = ProjectDescription.extend`
  ${RightContainer}:hover & {
    transform: translate3d(0, 8px, 0) translateX(-50%);
  }
`;
const ProjectDescription3 = ProjectDescription.extend`
  width: 100%;
  text-align: center;
  ${FullContainer}:hover & {
    transform: translate3d(0, 8px, 0) translateX(-50%);
  }
`;
const ProjectDescription4 = ProjectDescription.extend`
  color: #fff;
  width: 100%;
  text-align: center;
  ${FullContainerTop}:hover & {
    transform: translate3d(0, 8px, 0) translateX(-50%);
  }
  @media (max-width: 900px) {
    color: ${props => props.theme.black};
  }
`;

const HoverBox = styled.p`
  font-size: 1.25rem;
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.black};
  background-color: white;
  position: absolute;
  bottom: -1px;
  left: 0;
  margin: 0;
  padding: 0.4em 1em;
  background: white;
  text-transform: none;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1); /*use difference beizer to avoid box raising above bottom border*/
  transform: translate3d(0, 200px, 0);
  @media (max-width: 1200px) {
    transform: translate3d(0, 0, 0);
  }
`;
const HoverBox1 = HoverBox.extend`
  ${LeftContainer}:hover & {
    transform: translate3d(0, 0, 0);
  }
`;
const HoverBox2 = HoverBox.extend`
  ${RightContainer}:hover & {
    transform: translate3d(0, 0, 0);
  }
`;
const HoverBox3 = HoverBox.extend`
  ${FullContainer}:hover & {
    transform: translate3d(0, 0, 0);
  }
`;
const HoverBox4 = HoverBox.extend`
  ${FullContainerTop}:hover & {
    transform: translate3d(0, 0, 0);
  }
`;

/*-----Modal Component Styling--------*/
const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: ${projRad};
  border-top-right-radius: ${projRad};
  @media (max-width: 900px) {
    border-radius: 0px;
  }
`;
const ModalTitle = styled.h1`
  padding: 1rem 0 0.5rem 0;
  margin: 0;
  text-align: center;
  font-family: ${props => props.theme.headerFont};
  font-size: 2rem;
  line-height: 2rem;
  @media (max-height: 800px) {
    padding: 0;
  }
`;
const ModalDescription = styled.p`
  padding: 0;
  margin: 0 auto;
  text-align: left;
  font-family: ${props => props.theme.bodyFont};
  font-size: 1rem;
  width: 95%;
  @media (max-height: 800px) {
    /* font-size: 0.9rem; */
  }
`;
const SkillsUsed = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
  font-family: ${props => props.theme.bodyFont};
  font-size: 0.75rem;
  position: absolute;
  bottom: 2.5%;
  width: 95%;
  left: 2.5%;
  /* font-style: italic; */
`;
const ModalIcon = styled.i`
  font-size: 1rem;
  color: ${props => props.theme.mainColor};
  position: relative;
  bottom: 4px;
  &:hover {
    opacity: 0.8;
  }
`;
const ModalLink = styled.a`
  text-decoration: none;
`;
const ModalClose = styled.i`
  font-size: 1rem;
  color: #fff;
  position: absolute;
  top: 1%;
  right: 1%;
  &:hover {
    color: #ddd;
  }
  @media (max-width: 900px) {
    right: 2%;
  }
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      image: "",
      title: "",
      description: "",
      skills: "",
      link: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.showModal1 = this.showModal1.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.showModal3 = this.showModal3.bind(this);
    this.showModal4 = this.showModal4.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  showModal1() {
    this.setState({
      showModal: true,
      title: "Liz Miao Website",
      description:
        "Developed and deployed a portfolio website for a client based on provided specifications. Converted specifications into an animated and responsive pixel-perfect website. Also provided layout and animation input for the site. Coded entirely by hand with vanilla JavaScript.",
      image: "../img/LizPreview.png",
      skills:
        "Skills & Tech used: HTML5, CSS/SCSS, CSS Animations & Transitions, Responsive design, JavaScript, git, GitHub, SVG line animation",
      link: "http://portfolio.lizmiao.com/"
    });
  }
  showModal2() {
    this.setState({
      showModal: true,
      title: "Interactive Fortnite Map",
      description:
        "Researched, designed, developed, and deployed an interactive website that allows users to see various map objectives in Fortnite, an online multiplayer game. Coded with vanilla JavaScript.",
      image: "../img/FortniteMapPreview.png",
      skills:
        "Skills & Tech used: UI/UX, HTML5, CSS/SCSS, CSS Animations & Transitions, JavaScript, git, GitHub, SSL",
      link: "https://fortnitemap.info/"
    });
  }
  showModal3() {
    this.setState({
      showModal: true,
      title: "DevLink - A social media network for developers",
      description:
        "Developed and deployed a full-stack networking web application for developers. Includes an extensive back-end API, state management, authentication, validation, protected routes, and a NoSQL database. Built with the MERN stack and used bootstrap for most of the UI and responsiveness.",
      image: "../img/DevLinkPreview.png",
      skills:
        "Skills & Tech used: React, Redux, MongoDB, Mongoose, Express, Node, Bootstrap, JWT Authentication, Heroku, Axios, git, GitHub",
      link: "https://hidden-ridge-32225.herokuapp.com/"
    });
  }
  showModal4() {
    this.setState({
      showModal: true,
      title: "AMTAF - A Means to a Frontend",
      description:
        "Designed and developed an interactive website that shows the definitions of different front-end technologies. Built with vanilla JavaScript and used Pug for templating.",
      image: "../img/amtafPreview.png",
      skills:
        "Skills & Tech used: UI/UX, Pug, HTML5, CSS/SCSS, JavaScript, git, GitHub",
      link: "https://bstephenbb.github.io/amtaf/"
    });
  }

  renderModal() {
    if (!this.state.showModal) {
      return null;
    }
    const { title, description, image, skills, link } = this.state;
    return (
      <div>
        <ModalImage src={image} alt="Preview picture of website" />
        <ModalTitle>
          {title}{" "}
          <ModalLink href={link} target="_blank">
            <ModalIcon className="fas fa-external-link-alt" />
          </ModalLink>
        </ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <SkillsUsed>{skills}</SkillsUsed>
        <ModalClose className="fas fa-times" onClick={this.handleCloseModal} />
      </div>
    );
  }

  render() {
    return (
      <Wrapper id="projects">
        <H2>Work</H2>
        <WorkDesc>
          Here are some of the projects I've worked on. Select one to learn
          more. The source code for each can be found on my{" "}
          <GithubLink href="https://github.com/BStephenBB" target="blank">
            GitHub.
          </GithubLink>
        </WorkDesc>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          {this.renderModal()}
        </ReactModal>

        <WorkGrid>
          <FullContainerTop onClick={this.showModal4}>
            <InnerImg4 />
            <ProjectTitle4>
              AMTAF <span className="hide">- A Means to a Frontend</span>
            </ProjectTitle4>
            <ProjectDescription4>
              Designed and developed a website that defines front-end
              technologies
            </ProjectDescription4>
            <HoverBox4>View Project</HoverBox4>
          </FullContainerTop>

          <LeftContainer onClick={this.showModal1}>
            <InnerImg1 />
            <ProjectTitle1>Liz Miao Website</ProjectTitle1>
            <ProjectDescription1>
              Built a pixel-perfect responsive and dynamic website for a client
              based on given specifications
            </ProjectDescription1>
            <HoverBox1>View Project</HoverBox1>
          </LeftContainer>

          <RightContainer onClick={this.showModal2}>
            <InnerImg2 />
            <ProjectTitle2>Fortnite Map</ProjectTitle2>
            <ProjectDescription2>
              Designed and developed an interactive Fortnite website that shows
              map objectives
            </ProjectDescription2>
            <HoverBox2>View Project</HoverBox2>
          </RightContainer>

          <FullContainer onClick={this.showModal3}>
            <InnerImg3 />
            <ProjectTitle3>
              DevLink{" "}
              <span className="hide">
                - A social media network for developers
              </span>
            </ProjectTitle3>
            <ProjectDescription3>
              Created a full-stack social network application with Node.js,
              Express, React, Redux, and MongoDB.
            </ProjectDescription3>
            <HoverBox3>View Project</HoverBox3>
          </FullContainer>
        </WorkGrid>
      </Wrapper>
    );
  }
}

export default Work;
