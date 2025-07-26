import React from "react";
import background from "./assets/images/background-desktop.png";
import PatternLines from "./assets/images/pattern-lines.svg";
import PatternTop from "./assets/images/pattern-squiggly-line-top.svg";
import PatternDesktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import PatternMobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import PatternCircle from "./assets/images/pattern-circle.svg";

export default function Background() {
  return (
    <div className="w-full h-full absolute overflow-clip">
      {/* Background covert */}
      <main className="absolute w-full h-full bg-no-repeat bg-[url('./assets/images/background-mobile.png')] md:bg-[url('./assets/images/background-desktop.png')] mx-auto bg-covert bg-center">
        {/* ///////////////////////////////////////////// */}
        {/* PatternlLine covert */}
        <img
          src={PatternLines}
          className="w-full h-full object-cover"
          alt="background Pattern Lines"
        />
        {/* ///////////////////////////////////////////// */}
        {/* Patternl-Squiggly-Line top */}
        <img
          src={PatternTop}
          className="relative md:w-[20%] w-[30%] left-[70%] md:left-[80%] right-[10%] md:bottom-[110%] bottom-[115%] h-1/2 bg-contain bg-no-repeat"
          alt="background Pattern Lines"
        />
        {/* ///////////////////////////////////////////// */}
        {/* Pattern-Circle */}
        <img
          src={PatternCircle}
          className="relative w-[20%] left-[1%] bottom-[160%] h-[20%] bg-contain bg-no-repeat bg-center flex items-center justify-center"
          alt="Pattern Circle"
        />
        {/* Pattern-Circle */}
        <img
          src={PatternCircle}
          className="relative w-[20%] left-[65%] bottom-[110%] h-[20%] bg-contain bg-no-repeat bg-center flex items-center justify-center"
          alt="Pattern Circle"
        />
        {/* ///////////////////////////////////////////// */}
        {/* Pattern-Squiggly-Line bottom */}
        <section className="relative md:w-[40%] w-full left-[0%] bottom-[128%] h-[40%] flex items-center justify-center">
          <img
            src={PatternMobile}
            className="w-full h-full object-contain md:hidden"
            alt="squiggly line"
          />
          <img
            src={PatternDesktop}
            className="w-full h-full object-contain hidden md:block"
            alt="squiggly line desktop"
          />
        </section>
      </main>
    </div>
  );
}
