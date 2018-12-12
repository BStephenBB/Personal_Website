import React, { Component } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavItem = styled.div`
  float: right;
`;

const NavLogo = styled.img`
  /* height: 40px;
  width: auto; */
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
  font-family: ${props => props.theme.headerFont}, sans-serif;
  background-color: ${props => props.theme.white};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  padding: 1rem;
  /* display: flex;
  justify-content: flex-end;
  align-items: center; */
`;

const NavPos = styled.div`
  margin: 0 auto;
  width: 72.5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

class Navbar extends Component {
  render() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top =
          "calc(-6rem - 10px - 1rem)";
      }
      prevScrollpos = currentScrollPos;
    };
    return (
      <Wrapper id="navbar">
        <NavPos>
          <NavItem style={{ marginRight: "auto" }}>
            <AnchorLink href="#app" style={{ textDecoration: "none" }}>
              <NavStyle>
                <NavLogo src="../img/logo.svg" alt="logo" />
              </NavStyle>
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink href="#about" style={{ textDecoration: "none" }}>
              <NavStyle>About</NavStyle>
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink href="#projects" style={{ textDecoration: "none" }}>
              <NavStyle>Projects</NavStyle>
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink href="#resume" style={{ textDecoration: "none" }}>
              <NavStyle>Resume</NavStyle>
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink href="#contact" style={{ textDecoration: "none" }}>
              <NavStyle>Contact</NavStyle>
            </AnchorLink>
          </NavItem>
        </NavPos>
      </Wrapper>
    );
  }
}

export default Navbar;
// import React, { Component } from "react";
// import styled from "styled-components";
// import AnchorLink from "react-anchor-link-smooth-scroll";

// const List = styled.ul`
//   max-width: 1200px;
//   list-style-type: none;
//   margin: 0 auto 20vh auto;
//   /* padding: 1vh 1rem 1vh 0; */
//   overflow: hidden;
//   font-family: ${props => props.theme.headerFont}, sans-serif;
//   @media (max-width: 500px) {
//     text-align: left;
//     width: 320px;
//     padding: 0;
//   }
// `;
// const ListItem = styled.li`
//   float: right;
// `;
// const LeftListItem = styled.li`
//   float: left;
// `;
// const NavLogo = styled.img``;

// const NavStyle = styled.div`
//   display: block;
//   text-align: center;
//   margin: 1rem;
//   line-height: 3rem;
//   color: black;
//   height: 3rem;
//   font-size: 1.25rem;
//   &:hover {
//     color: ${props => props.theme.mainColor};
//     cursor: pointer;
//   }
//   @media (max-width: 500px) {
//     margin: 0.5rem;
//     font-size: 1rem;
//   }
// `;
// const Wrapper = styled.div`
//   background-color: ${props => props.theme.white};
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 100%;
//   height: 6rem;
//   z-index: 10;
//   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
//   transition: all 0.25s;
// `;

// class Navbar extends Component {
//   render() {
//     let prevScrollpos = window.pageYOffset;
//     window.onscroll = function() {
//       let currentScrollPos = window.pageYOffset;
//       if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//       } else {
//         document.getElementById("navbar").style.top = "calc(-6rem - 10px)";
//       }
//       prevScrollpos = currentScrollPos;
//     };
//     return (
//       <Wrapper id="navbar">
//         <List>
//           <ListItem>
//             <AnchorLink href="#contact" style={{ textDecoration: "none" }}>
//               <NavStyle>Contact</NavStyle>
//             </AnchorLink>
//           </ListItem>
//           <ListItem>
//             <AnchorLink href="#resume" style={{ textDecoration: "none" }}>
//               <NavStyle>Resume</NavStyle>
//             </AnchorLink>
//           </ListItem>
//           <ListItem>
//             <AnchorLink href="#projects" style={{ textDecoration: "none" }}>
//               <NavStyle>Projects</NavStyle>
//             </AnchorLink>
//           </ListItem>
//           <ListItem>
//             <AnchorLink href="#about" style={{ textDecoration: "none" }}>
//               <NavStyle>About</NavStyle>
//             </AnchorLink>
//           </ListItem>
//           <LeftListItem>
//             <AnchorLink href="#app" style={{ textDecoration: "none" }}>
//               <NavStyle>
//                 <NavLogo src="../img/logo.svg" alt="logo" />
//               </NavStyle>
//             </AnchorLink>
//           </LeftListItem>
//         </List>
//       </Wrapper>
//     );
//   }
// }

// export default Navbar;
