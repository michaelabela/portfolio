import React from "react";

function FranPortfolio() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Francesca Sabel's Portfolio Website
      </h1>
      <p className="text-base md:text-xl mb-3 font-light px-5 md:px-40">
        This is my first freelance web design and development project. My
        friend, Francesca, is a theater director in New York. She came to me
        asking for a custom portfolio website. Her only requirements, other than
        content / copywriting, were that it be very simple and use olive green.
        Check out the result{" "}
        <a href="https://www.francescasabel.com" className="text-blue-600">
          here
        </a>
        !
      </p>
      <div className="flex items-center justify-center">
        <img className="w-1/2" src="/assets/fran-fonts.png"></img>
      </div>
    </div>
  );
}

export default FranPortfolio;
