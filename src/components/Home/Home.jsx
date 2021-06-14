import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="max-w-screen-2xl mx-auto pb-3">
        <Banner />
        <Products />
      </main>
    </div>
  );
};

export default Home;
