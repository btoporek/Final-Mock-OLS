import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

function EditCourseModal({ id, name, description, fetchCourses }) {
  const [showCourse, setShowCourse] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [nameChange, setNameChange] = useState(false);
  const [descriptionChange, setDescriptionChange] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  const handleCloseCourse = () => {
    setShowCourse(false);
    setDisabledButton(true);
  };
  const handleShowCourse = () => setShowCourse(true);

  // Function to edit courses in api and page
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

  //function to save state of changed value for course name - checks if statement to enable save button
  const changeDescription = (value) => {
    setCourseDescription(value);
    setDescriptionChange(true);
    enableSave();
  };

  //function to save state of changed value for course name - checks if statement to enable save button
  const changeName = (value) => {
    setCourseName(value);
    setNameChange(true);
    enableSave();
  };

  //function to enable save button if both values have been changed
  const enableSave = () => {
    if (nameChange === true && descriptionChange === true) {
      setDisabledButton(false);
    }
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
          <form>
            <FormLabel>Course Name:</FormLabel>
            <FormControl
              type="text"
              placeholder={name}
              value={courseName}
              onChange={(e) => {
                changeName(e.target.value);
              }}
            />
            <FormLabel>Course Description:</FormLabel>
            <FormControl
              as="textarea"
              aria-required
              rows={3}
              placeholder={description}
              value={courseDescription}
              onChange={(e) => {
                changeDescription(e.target.value);
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCourse}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={disabledButton}
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
