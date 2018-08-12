import React, { Component } from "react";

import BodyHeader from "./BodyHeader";
import Skills from "./Skills";
import Work from "./Work";
import Resume from "./Resume";
import Contact from "./Contact";

export default class Body extends Component {
  render() {
    return (
      <div>
        <BodyHeader />
        <Skills />
        <Work />
        <Resume />
        <Contact />
      </div>
    );
  }
}
