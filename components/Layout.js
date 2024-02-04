import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Card from "./Card";
import Tile from "./Tile";

const Layout = () => {
  return (
    <div className="relative">
      <Card />     
      <div className="absolute inset-0">
        <Navbar />
      </div>
      <div>
        <Hero />
        <Tile />  
      </div>
    </div>
    
  );
};

export default Layout;
