import React, { Component } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const List = styled.ul`
  max-width: 1200px;
  list-style-type: none;
  margin: 0 auto 20vh auto;
  padding: 1vh 1rem 1vh 0;
  overflow: hidden;
  font-family: ${props => props.theme.headerFont}, sans-serif;
  @media (max-width: 500px) {
    text-align: left;
    width: 320px;
    padding: 0;
  }
`;
const ListItem = styled.li`
  float: right;
`;
const LeftListItem = styled.li`
  float: left;
`;
const NavLogo = styled.img`
  &:hover {
    cursor: initial;
  }
`;
const NavStyle = styled.div`
  display: block;
  text-align: center;
  margin: 1rem;
  line-height: 3rem;
  color: black;
  height: 3rem;
  font-size: 1.25rem;
  &:hover {
    color: ${props => props.theme.mainColor};
    cursor: pointer;
  }
  @media (max-width: 500px) {
    margin: 0.5rem;
    font-size: 1rem;
  }
`;
const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
`;

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <List>
          <ListItem>
            <AnchorLink href="#contact" style={{ textDecoration: "none" }}>
              <NavStyle>Contact</NavStyle>
            </AnchorLink>
          </ListItem>
          <ListItem>
            <AnchorLink href="#resume" style={{ textDecoration: "none" }}>
              <NavStyle>Resume</NavStyle>
            </AnchorLink>
          </ListItem>
          <ListItem>
            <AnchorLink href="#projects" style={{ textDecoration: "none" }}>
              <NavStyle>Projects</NavStyle>
            </AnchorLink>
          </ListItem>
          <ListItem>
            <AnchorLink href="#about" style={{ textDecoration: "none" }}>
              <NavStyle>About</NavStyle>
            </AnchorLink>
          </ListItem>
          <LeftListItem>
            <NavStyle>
              <NavLogo src="../img/logo.svg" alt="logo" />
            </NavStyle>
          </LeftListItem>
        </List>
      </Wrapper>
    );
  }
}

export default Navbar;
