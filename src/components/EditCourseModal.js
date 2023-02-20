import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

function EditCourseModal({ id, name, description, fetchCourses }) {
  const [showCourse, setShowCourse] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const handleCloseCourse = () => setShowCourse(false);
  const handleShowCourse = () => setShowCourse(true);

  const handleEditCourse = async (e, id) => {
    e.preventDefault();
    console.log(`Editing course id ${id}`);
    const url = "https://63f112b35703e063fa524823.mockapi.io/courses";
    const courseInfo = {
      name: courseName,
      description: courseDescription,
    };
    try {
      fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(courseInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => fetchCourses());
      setCourseName(courseName);
      setCourseDescription(courseDescription);
    } catch (error) {
      console.error(error);
    }
    setCourseName("");
    setCourseDescription("");
    handleCloseCourse();
  };

  return (
    <>
      <button className="card-btn-edit" onClick={handleShowCourse}>
        Edit Course
      </button>
      <Modal
        show={showCourse}
        onHide={handleCloseCourse}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header id="edit-header">Edit Course: {name}</Modal.Header>
        <Modal.Body>
          <FormGroup>
            <FormLabel>Course Name:</FormLabel>
            <FormControl
              type="text"
              placeholder={name}
              value={courseName}
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            />
            <FormLabel>Course Description:</FormLabel>
            <FormControl
              as="textarea"
              rows={3}
              placeholder={description}
              value={courseDescription}
              onChange={(e) => {
                setCourseDescription(e.target.value);
              }}
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCourse}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              handleEditCourse(e, id);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCourseModal;
