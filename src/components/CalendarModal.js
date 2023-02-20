import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Calendar } from "react-calendar";
import "../styles/CalendarModal.css";

function CalendarModal() {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCloseCalendar = () => setShowCalendar(false);
  const handleShowCalendar = () => setShowCalendar(true);

  return (
    <>
      <button onClick={handleShowCalendar} className="icon-button">
        <FaRegCalendarAlt className="heading-icons" id="home-calendar" />
      </button>
      <Modal
        show={showCalendar}
        onHide={handleCloseCalendar}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body id="calendar-modal-body">
          <Calendar />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCalendar}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CalendarModal;
