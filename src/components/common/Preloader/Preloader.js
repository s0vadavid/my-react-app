import React from "react";
import { preloader } from "./../../../assets/loader.svg";

let Preloader = (props) => {
  return (
    <div>
      <img src={preloader}></img>
    </div>
  );
};

export default Preloader;
