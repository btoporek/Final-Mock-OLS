import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav className="sidebar">
          <ul className="sidebar-items">
            <h2 id="sidebar-heading">Learning Platform</h2>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
