import React from "react";
import ReactDom from "react-dom";
import { MsgComponent } from "./msgComponent";

ReactDom.render(
    <div>
        <h1><MsgComponent/></h1>
    </div>,
    document.getElementById("root")
);