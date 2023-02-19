import React, { useEffect, useState } from "react";
import "./Courses.css";
import Service from "../service/Service";
import ServiceClient from "../service/ServiceClient";
import AddCourseModal from "./AddCourseModal";
import { Card, Row, Col, Container } from "react-bootstrap";
import EditCourseModal from "./EditCourseModal";
import RosterModal from "./RosterModal";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const courseService = new Service(ServiceClient);

  const fetchCourses = async () => {
    try {
      const courses = await courseService.getCourses();
      setCourses(courses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

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
    <div className="flex">
      <h1 className="header">
        Active Courses <AddCourseModal addNewCourse={addNewCourse} />
      </h1>
      <Container id="courses">
        <Row className="gy-4">
          {courses.map((course, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card>
                <Card.Img src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg" />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Subtitle>{course.description}</Card.Subtitle>
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
