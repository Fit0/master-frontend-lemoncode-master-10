import React from "react";
import classes from "./msgComponentStyles.scss";

const logo = require("./content/logo_visual_code.png");
const logoLc = require("./content/logo_1.png");
const msg: string = "Master Front End - LemonCode";

export const MsgComponent: React.FC = () => {
  return (
    <div>
      <div>
        <img src={logo} />
        <img src={logoLc} />
      </div>
      <div className={`${classes.msgBackground}`}>
        <h1>{msg}</h1>
        <span>{process.env.TITLE_APP}</span>
      </div>
    </div>
  );
};
