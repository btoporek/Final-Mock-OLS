import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Service from "../service/Service";
import ServiceClient from "../service/ServiceClient";
import "../styles/RosterModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ListGroup } from "react-bootstrap";

function RosterModal() {
  const [showProfile, setShowProfile] = useState(false);
  const [roster, setRoster] = useState([]);

  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  const courseService = useMemo(() => new Service(ServiceClient), []);

  const fetchRoster = useCallback(async () => {
    try {
      const rosterList = await courseService.getRoster();
      setRoster(rosterList);
    } catch (error) {
      console.log(error);
    }
  }, [courseService]);

  useEffect(() => {
    fetchRoster();
  }, [fetchRoster]);

  const handleDeleteStudent = async (e, id, firstname, lastname) => {
    console.log(`Deleted student ${firstname} ${lastname}`);
    const url = "https://63f112b35703e063fa524823.mockapi.io/roster";
    e.preventDefault();
    try {
      fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => fetchRoster());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button className="card-btn-users" onClick={handleShowProfile}>
        Course Roster
      </button>
      <Modal
        show={showProfile}
        onHide={handleCloseProfile}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Course Roster</Modal.Title>
          <button className="close-modal" onClick={handleCloseProfile}>
            <IoIosCloseCircleOutline />
          </button>
        </Modal.Header>
        <Modal.Body>
          {roster.map((student, index) => (
            <ListGroup key={index}>
              <ul>
                <div className="list-items">
                  <li className="roster-list">
                    <img src={student.avatar} alt="" className="roster-image" />
                    Name: {student.firstname} {student.lastname} <br></br>
                    Contact:{" "}
                    {`${student.firstname}.${student.lastname}@email.com`}
                  </li>
                  <div className="btn-group">
                    <button
                      id="drop"
                      onClick={(e) => {
                        handleDeleteStudent(
                          e,
                          student.id,
                          student.firstname,
                          student.lastname
                        );
                      }}
                    >
                      Drop
                    </button>
                    <button id="contact">
                      <a
                        href={`https://mail.google.com/mail/u/0/?fs=1&to=${student.firstname}.${student.lastname}@email.com&tf=cm`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Contact
                      </a>
                    </button>
                  </div>
                </div>
              </ul>
            </ListGroup>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RosterModal;
