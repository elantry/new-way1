import React from "react";
import {
  Creativesection,
  Creativeinfo,
  Infodesc,
  Infodesca,
  Infodir,
  Infotitle,
  Infotitlespan,
} from "./style";

const About = () => {
  return (
    <Creativesection>
      <div class="container">
        <Creativeinfo>
          <Infotitle>
            <Infotitlespan>This is</Infotitlespan> Me
          </Infotitle>
          <Infodir>Creative Director</Infodir>
          <Infodesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <Infodesca href="#">explicabo</Infodesca> maxime quibusdam quaerat
            nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </Infodesc>
          <Infodesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </Infodesc>
        </Creativeinfo>
      </div>
    </Creativesection>
  );
};

export default About;
