import React from "react";
import {
  HomeSection,
  Btn,
  Info,
  Information,
  Desc,
  Title,
  Span,
} from "./style";
const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <Information>
          <Title>Hamza Nabil</Title>
          <Info>Creative Director</Info>
          <Desc>
            Iam a professional <Span>UX Designer</Span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </Desc>
          <Btn>Let's Begin</Btn>
        </Information>
      </div>
    </HomeSection>
  );
};

export default Home;
