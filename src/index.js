import React from "react";
import {render} from "react-dom";
import StarRating from "./StarRating";

render(
  <StarRating
    style={{ backgroundColor: "lightblue" }}
    onDoubleClick={e => alert('doubleClick!!!')}
  />,
  document.getElementById('root')
);
