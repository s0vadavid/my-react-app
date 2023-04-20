import React from "react";
import { preloader } from "../../../assets/loader.svg";

let Preloader = (props) => {
  return (
    <div>
      <object data={preloader} type="image/svg+xml" width="100" height="100"></object>
    </div>
  );
};

export default Preloader;
