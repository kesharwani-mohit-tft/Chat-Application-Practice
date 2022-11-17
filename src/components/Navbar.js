import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import imgMohit from "../assets/Image/MohitPic.jpg";
import Image from "./Image";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="NavLeft">Chat Application</div>
        <div className="NavRight">
          <Image url={imgMohit} />

          <DropdownButton id="dropdown-basic-button" title="User's Name">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
