import React from "react";

function GothamWriters() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Selected Writings from the Gotham Writers Workshop
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium px-5 md:px-40">
        In the Fall of 2023 I took a feature article writing course with
        Gotham Writers. Below are some selected pieces from that course.
        All of these were researched, reported, and written by me.
      </p>
      <object
        data="/assets/gotham-pieces.pdf"
        type="application/pdf"
        width="1000px"
        height="800px"
      >
        <p>
          <a href="/assets/gotham-pieces.pdf">
            Download Writing Selection PDF
          </a>
        </p>
      </object>
    </div>
  );
}

export default GothamWriters;
