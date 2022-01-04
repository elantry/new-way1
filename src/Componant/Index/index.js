import React from "react";
import Home from "./../Home";
import About from "./../About";

import Footer from "./../Footer";

import Profile from "./../Profile";
import Portfolio from "./../Portfolio";
import SocialMedia from "./../SocialMedia";
import Work from "./../Work";
const Index = () => {
  return (
    <div>
      <Home />
      <Work />
      <Portfolio />

      <Profile />

      <About />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Index;
