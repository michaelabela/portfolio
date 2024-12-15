import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-10 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolio.map((project, index) => {
          return (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              tags={project.tags}
              link={project.link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
