import React from "react";
import Courses from "../components/Courses";
import "../components/Courses.css";

function CoursesPage() {
  return (
    <div className="courses">
      <div className="container">
        <Courses />
      </div>
    </div>
  );
}

export default CoursesPage;
