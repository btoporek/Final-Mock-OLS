import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Image from "react-bootstrap/Image";
import "../styles/ProfileModal.css";

function ProfileModal() {
  const [showProfile, setShowProfile] = useState(false);

  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  return (
    <>
      <button className="icon-button" onClick={handleShowProfile}>
        <CgProfile className="heading-icons" />
      </button>
      <Modal
        show={showProfile}
        onHide={handleCloseProfile}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src="https://media.licdn.com/dms/image/C4E03AQG0Tco5DJNqKg/profile-displayphoto-shrink_200_200/0/1658886321663?e=1681948800&v=beta&t=eWGPRlJMBxZlMs4vRMeFcrY4o_E5PPTeWI9_h733lpY"
            roundedCircle
            thumbnail
          />
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item" id="list-title">
              Name:{" "}
            </li>
            <li className="list-group-item" id="list-info">
              Brittni Toporek
            </li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item" id="list-title">
              Position:{" "}
            </li>
            <li className="list-group-item" id="list-info">
              Instructor
            </li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item" id="list-title">
              {" "}
              Email:
            </li>
            <li className="list-group-item" id="list-info">
              brittni.toporek@emaildomain.com
            </li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item" id="list-title">
              Phone:{" "}
            </li>
            <li className="list-group-item" id="list-info">
              555-123-4567
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfile}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileModal;
