import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Portfoliosection,
  Title,
  Span,
  List,
  Img,
  PortfolioItem,
  Overlay,
  Overlayspan,
  Box,
} from "./style";
const Portfolio = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => {
        setImages(res.data.portfolio);
        console.log(res.data.portfolio);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const PortfolioImages = images.map((imageItems) => (
    <Box key={imageItems.id}>
      <Img src={imageItems.image} alt="" />
      <Overlay>
        <Overlayspan>Show Image</Overlayspan>
      </Overlay>
    </Box>
  ));

  return (
    <Portfoliosection>
      <Title>
        <Span>My</Span> Portfolio
      </Title>
      <List>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </List>
      <div>{PortfolioImages}</div>
    </Portfoliosection>
  );
};

export default Portfolio;
