import React from "react";

const Marquee = ({ items }) => {
  return (
    <div className="relative flex items-center overflow-x-hidden col-span-2 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
      <div className=" h-20 flex items-center animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="text-xl mx-6 italic">
            {item}
          </span>
        ))}
      </div>
      <div className="absolute flex items-center h-20 top-0 animate-marquee2 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="text-xl mx-6 italic">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
