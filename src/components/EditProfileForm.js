import React, { useState } from "react";

export const EditProfileForm = () => {
  const [profileInfo, setProfileInfo] = useState(
    {
      name: "Brittni Toporek",
      position: "Instructor",
      email: "myname@email.com",
      phone: "123-456-7890",
    } || {}
  );
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleEditClick = (e) => {
    e.preventDefault();
    setDisabled(false);
  };

  // const handleEditFormChange = (e) => {
  //   //NOTE function for storing edited data
  //   e.preventDefault();

  //   const fieldName = e.target.getAttribute("id"); //NOTE - grabs input spot by name, ex: "title"
  //   const fieldValue = e.target.value; //NOTE - grabs value being entered into input

  //   const newFormData = { ...editFormData }; //NOTE - spread operator to grab object as described in state above
  //   newFormData[fieldName] = fieldValue; //NOTE - inserts data entered in field Value within specified fieldName to variable to hold info

  //   setEditFormData(newFormData); //NOTE sets state to newly entered form data
  // };

  // const handleOnChange = (e) => {
  //   setProfileInfo({
  //     name: e.target.value,
  //     position: e.target.value,
  //     email: e.target.value,
  //     phone: e.target.value,
  //   });
  // };

  const handleSave = (e) => {
    setProfileInfo({
      name: e.target.value,
      position: e.target.value,
      email: e.target.value,
      phone: e.target.value,
    });

    setDisabled(true);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name" className="profile-label">
          Name:
        </label>
        <input
          className="profile-input"
          type="text"
          id="name"
          placeholder="Brittni Toporek"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          disabled={disabled}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="profile-label">
          Position:
        </label>
        <input
          className="profile-input"
          type="text"
          id="position"
          placeholder="Instructor"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          disabled={disabled}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="profile-label">
          Email address:
        </label>
        <input
          className="profile-input"
          type="email"
          id="email"
          placeholder="brittni.toporek@emaildomain.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={disabled}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="profile-label">
          Phone:
        </label>
        <input
          className="profile-input"
          type="text"
          id="phone"
          placeholder="555-123-4567"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          disabled={disabled}
        />
      </div>
      <div>
        <button className="btn btn-warning" onClick={handleEditClick}>
          Edit
        </button>{" "}
        &nbsp;
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>{" "}
      </div>
    </form>
  );
};
export default EditProfileForm;
