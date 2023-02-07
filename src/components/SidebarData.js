import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Schedule",
    path: "/schedule",
    icons: <AiIcons.AiTwotoneCalendar />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/courses",
    icons: <FaIcons.FaRegListAlt />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icons: <FcIcons.FcAbout />,
    cName: "nav-text",
  },
];
