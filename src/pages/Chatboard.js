import React from "react";
import LeftComponent from "../components/LeftComponent";
import Navbar from "../components/Navbar";
import RightComponent from "../components/RightComponent";

const Chatboard = ({ socket }) => {
  return (
    <>
      <div style={{ overflowY: "hidden" }}>
        <Navbar />
        <div className="lowerComponent">
          <LeftComponent />
          <RightComponent socket={socket} />
        </div>
      </div>
    </>
  );
};

export default Chatboard;
