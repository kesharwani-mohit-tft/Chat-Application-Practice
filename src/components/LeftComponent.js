import React from "react";
import Form from "react-bootstrap/Form";
import icon from "../assets/Image/loupe.png";
import iconsms from "../assets/Image/chatting.png";
import Cards from "./Cards";
import Image from "./Image";

const LeftComponent = () => {
  const data = [
    {
      id: "1",
      name: "John",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "2",
      name: "kelvin",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "3",
      name: "Rohan",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "4",
      name: "Faizan",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "5",
      name: "Shubham",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "6",
      name: "Neelesh",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "7",
      name: "Yogi",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "8",
      name: "Yogi",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "9",
      name: "Yogi",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
    {
      id: "10",
      name: "Yogi",
      sms: "Hello Mohit",
      Img: "",
      Time: "08:10",
    },
  ];

  return (
    <div className="chatbox">
      {/* Search bar + icons */}
      <div className="search">
        <Image url={icon} />
        <Form.Control type="text" placeholder="Search..." />
        <Image url={iconsms} />
        <br />
      </div>

      {/* Chat cards */}
      <div className="container">
        {data.map((ele, index) => {
          return (
            <div key={index} className="">
              <Cards data={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftComponent;
