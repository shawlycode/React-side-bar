import React from "react";
import "../App.css";
import { SideBarData } from "./SideBarData";

function SideBar() {
  return (
    <div className="list">
      <ul classname="side-bar">
        {SideBarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row" 
              id= {window.location.pathname == val.link? "active": "" }
              onClick={()=> {window.location.pathname = val.link;
            }}
            >
              {""}
              <div id="icons">{val.icon} </div>
              {""}
              <div id="titles">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
