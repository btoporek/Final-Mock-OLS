import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { GrChapterAdd } from "react-icons/gr";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

function AddCourseModal({ addNewCourse }) {
  const [showCourse, setShowCourse] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const handleCloseCourse = () => setShowCourse(false);
  const handleShowCourse = () => setShowCourse(true);

  const course = {
    name: courseName,
    description: courseDescription,
  };

  const handleAddCourse = (course) => {
    addNewCourse(course);
    handleCloseCourse();
  };

  return (
    <>
      <button
        className="btn-add-course"
        data-toggle="tooltip"
        title="Add Course"
        onClick={handleShowCourse}
      >
        <GrChapterAdd />
      </button>
      <Modal
        show={showCourse}
        onHide={handleCloseCourse}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>Add New Course</Modal.Header>
        <Modal.Body>
          <FormGroup>
            <FormLabel>Course Name:</FormLabel>
            <FormControl
              type="text"
              placeholder="Name of course"
              value={courseName}
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            />
            <FormLabel>Course Description:</FormLabel>
            <FormControl
              as="textarea"
              rows={3}
              placeholder="Description of course"
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
              handleAddCourse(course);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCourseModal;
