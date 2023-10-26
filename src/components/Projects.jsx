import React from "react";
import PortofolioSlider from "./PortofolioSlider";

function Projects() {
  return (
    <div>
      <div className="text-center pb-14 lg:px-24 px-4" id="portfolio">
        <h4 className="text-gray-300 font-semibold text-2xl">Letest Projects</h4>
        <h2 className="text-5xl font-bold leading-snug text-white">Portofolio to explore</h2>
      </div>

      <div className="lg:px-24 px-4 overflow-hidden">
        <PortofolioSlider />
      </div>
      <div className="md:h-24 h-12"></div>
    </div>
  );
}

export default Projects;
