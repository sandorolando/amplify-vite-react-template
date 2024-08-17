import React, { useState, useEffect } from "react";
import "./style.css";

import { Navigation } from "../../components/landingpage/navigation";
import { Header } from "../../components/landingpage/header";
import { Features } from "../../components/landingpage/features";
import { About } from "../../components/landingpage/about";
import { Team } from "../../components/landingpage/Team";
import { Contact } from "../../components/landingpage/contact";

import JsonData from "../../assets/data.json";
import SmoothScroll from "smooth-scroll";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
