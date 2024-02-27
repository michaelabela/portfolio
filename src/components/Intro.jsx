import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Mikey Abela
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Creative Technologist
      </p>
      <p className="text-sm max-w-xl mb-6 font-light">
        I am a Brooklyn based web developer, product manager, and
        creative. Right now, I'm working on technology for the climate.
        I make maps, videos, websites, graphics, articles, software, and
        more.
      </p>
    </div>
  );
}

export default Intro;
