import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Componant/Contact";
import Index from "./Componant/Index";
import Navbar from "./Componant/Navbar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
