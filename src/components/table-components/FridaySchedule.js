import Service from "../../service/Service";
import ServiceClient from "../../service/ServiceClient";
import { useCallback, useEffect, useState, useMemo } from "react";

export const FridaySchedule = () => {
  const [courses, setCourses] = useState([]);
  const courseService = useMemo(() => new Service(ServiceClient), []); //calls information for api requests

  //NOTE - useCallback and useMemo functions are necessary to have useEffect call fetchCourses function as opposed to re-writing get requests separate from service components

  const fetchCourses = useCallback(async () => {
    try {
      const courses = await courseService.getCourses();
      setCourses(courses);
    } catch (error) {
      console.log(error);
    }
  }, [courseService]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <>
      <table className="table">
        <thead>
          <tr className="table-headers">
            <th>Section</th>
            <th>Class</th>
            <th>Subject</th>
          </tr>
        </thead>
        {courses.slice(9, 13).map((course, index) => (
          <tbody key={course.id}>
            <tr className="table-rows">
              <td className="table-course-section">10{index + 10}</td>
              <td className="table-course-name">{course.name}</td>
              <td className="table-course-description">{course.description}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
