import React from "react";
import Profile from "../assets/Image/MohitPic.jpg";

const Cards = ({ data }) => {
  const { id, name, sms, Img, Time } = data;

  return (
    <div className="card1">
      <img className="ProfilePic" src={Profile} alt="No Image" />

      <div className="cardDetails">
        <h6 className="cardh5">{name}</h6>
        <p className="cardp">Hello Mohit How are you...</p>
      </div>
    </div>
  );
};

export default Cards;
