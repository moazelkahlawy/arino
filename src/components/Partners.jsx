import React from "react";
import MovingText from "./MovingText";
import cpmpany1 from "../assets/partner_1.svg";
import cpmpany2 from "../assets/partner_3 (1).svg";
import cpmpany3 from "../assets/partner_3.svg";
import cpmpany4 from "../assets/partner_4.svg";
import cpmpany5 from "../assets/partner_5.svg";

function Partners() {
  return (
    <div>
      <MovingText />

      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center gap-8 lg:px-24 pt-5">
        <img src={cpmpany1} alt="" />
        <img src={cpmpany2} alt="" />
        <img src={cpmpany3} alt="" />
        <img src={cpmpany4} alt="" />
        <img src={cpmpany5} alt="" />
        <img src={cpmpany5} alt="" />
      </div>

      <div className="h-20"></div>
    </div>
  );
}

export default Partners;
