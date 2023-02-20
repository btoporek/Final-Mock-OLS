import React from "react";
import { FaRegListAlt } from "react-icons/fa";
import {
  AiOutlineHome,
  AiTwotoneCalendar,
  AiOutlineInfoCircle,
} from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Schedule",
    path: "/schedule",
    icon: <AiTwotoneCalendar />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/courses",
    icon: <FaRegListAlt />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <AiOutlineInfoCircle />,
    cName: "nav-text",
  },
];
