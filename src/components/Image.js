import React from "react";

const Image = (props) => {
  return (
    <div>
      <img
        className="ProfilePic"
        src={props.url}
        alt="No Image"
        loading="lazy"
        
      />
    </div>
  );
};

export default Image;
