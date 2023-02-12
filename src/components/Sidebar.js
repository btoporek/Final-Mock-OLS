import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { VscBook } from "react-icons/vsc";

export default function Sidebar() {
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav className="sidebar">
          <ul className="nav-menu-items">
            <h2 id="sidebar-heading">
              <VscBook className="icons" /> Learning Platform
            </h2>
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

// <>
// <IconContext.Provider value={{ color: "undefined" }}>
//   <div className="navbar">
//     <Link to="#" className="menu-bars" element={showSidebar}>
//       <FaIcons.FaBars onClick={showSidebar} />
//     </Link>
//   </div>
//   <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//     <ul className="nav-menu-items" onClick={showSidebar}>
//       <li className="navbar-toggle">
//         <Link to="#" className="menu-bars">
//           <AiIcons.AiOutlineClose />
//         </Link>
//       </li>
//       {SidebarData.map((item, index) => {
//         return (
//           <li key={index} className={item.cName}>
//             <Link to={item.path}>
//               {item.icon}
//               <span>{item.title}</span>
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   </nav>
// </IconContext.Provider>
// </>
