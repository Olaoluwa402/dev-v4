import React from "react";
import rating from "./rating.module.css";
import { AiFillStar } from "react-icons/ai";

function Rating() {
  return (
    <div className={rating.ratingbox}>
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <span style={{ color: "grey" }}>(65)</span>
    </div>
  );
}

export default Rating;
