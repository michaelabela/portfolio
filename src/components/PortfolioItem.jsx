import React from "react";
import { Link } from "react-router-dom";

function PortfolioItem({ title, imgUrl, tags, link }) {
  return (
    <Link to={link}>
      <div className="border border-neutral-500 overflow-hidden hover:bg-neutral-200 cursor-pointer">
        <img
          src={imgUrl}
          alt={title + " image"}
          className="w-full h-36 md:h-48 object-cover"
        />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {tags.map((item, index) => {
              return (
                <span
                  className="inline-block px-2 py-1 border border-neutral-300 "
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PortfolioItem;
