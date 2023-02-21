import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { SiCircle } from "react-icons/si";
import ProfileModal from "../components/ProfileModal";
import CalendarModal from "../components/CalendarModal";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
          <div>
            <ProfileModal />
            <button id="mail-button">
              <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
                <MdOutlineMail className="heading-icons" />
              </a>
            </button>
            <CalendarModal />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineCloseSquare id="close-nav-button" />
              </Link>
            </li>
            <SiCircle className="sidebar-logo" />
            <h2 className="sidebar-heading">Learning Platform</h2>
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
