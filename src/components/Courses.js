import React, { useEffect, useState, useCallback, useMemo } from "react";
import "../styles/Courses.css";
import Service from "../service/Service";
import ServiceClient from "../service/ServiceClient";
import AddCourseModal from "./AddCourseModal";
import { Card, Row, Col, Container } from "react-bootstrap";
import EditCourseModal from "./EditCourseModal";
import RosterModal from "./RosterModal";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const courseService = useMemo(() => new Service(ServiceClient), []);

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

  const addNewCourse = async (course) => {
    console.log(
      `Adding Course - Name: ${course.name} Description: ${course.description}`
    );
    try {
      const createdCourse = await courseService.createCourse(course);
      setCourses([...courses, createdCourse]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCourse = async (e, id) => {
    console.log(`Deleted course id ${id}`);
    const url = "https://63f112b35703e063fa524823.mockapi.io/courses";
    e.preventDefault();
    try {
      fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => fetchCourses());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">
        Active Courses <AddCourseModal addNewCourse={addNewCourse} />
      </h1>
      <Container id="courses">
        <Row className="gy-4">
          {courses.map((course, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card>
                <Card.Img
                  className="course-image"
                  alt=""
                  src="https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <Card.Body>
                  <Card.Title>
                    {course.name} <h5>Section 10{index + 1}</h5>
                  </Card.Title>
                  <Card.Subtitle>
                    Description: {course.description}
                  </Card.Subtitle>
                  <button
                    className="card-btn-remove"
                    onClick={(e) => {
                      handleDeleteCourse(e, course.id);
                    }}
                  >
                    Remove Course
                  </button>
                  <EditCourseModal
                    fetchCourses={fetchCourses}
                    id={course.id}
                    name={course.name}
                    description={course.description}
                  />
                  <RosterModal />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
