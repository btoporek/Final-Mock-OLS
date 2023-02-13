import React from "react";
import { MdOutlineMail } from "react-icons/md";
import ProfileModal from "../components/ProfileModal";
import CalendarModal from "../components/CalendarModal";

function HomePage() {
  return (
    <>
      <div className="home">
        {" "}
        <h1 id="home-heading">Welcome Back</h1>
      </div>
    </>
  );
}

export default HomePage;

//  {isCalendarModalOpen && (
//       <div className="calendar-modal">
//         {/* <Calendar id="modal-shadow" /> */}
//         <CalendarModal />
//       </div>
//     )}
