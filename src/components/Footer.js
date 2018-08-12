import React, { Component } from "react";
import styled from "styled-components";

const Authored = styled.div`
  font-family: ${props => props.theme.headerFont};
  font-size: 1rem;
  text-align: center;
  background-color: white;
  padding: 0.5rem 0;
`;

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "white" }} />
        <Authored>
          Designed &amp; Developed by Stephen Brown-Bourne &copy; 2018
        </Authored>
      </div>
    );
  }
}
