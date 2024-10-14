import React from "react";
import Banner from "../../components/Banner";
import NewProduct from "../../components/NewProduct";
import Gallery from "../../components/Gallery";
import News from "../../components/News";
import Services from "../../components/Services";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <NewProduct type="new" />
      <Gallery />
      <News />
      <Services />
    </div>
  );
};

export default HomePage;
