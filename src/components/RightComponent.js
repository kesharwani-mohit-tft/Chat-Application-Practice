import React from "react";
import Image from "./Image";
import MohitPic from "../assets/Image/MohitPic.jpg";
import smspic from "../assets/Image/sms.png";
import videocameraPic from "../assets/Image/videocamera.png";
import telephonepic from "../assets/Image/telephone.png";
import sms2pic from "../assets/Image/sms2.png";
import micpic from "../assets/Image/mic.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const RightComponent = () => {
  return (
    <div className="TopRight">
      <div className="rightchatshow">
        {/* 1 */}
        <div className="rightimgpic">
          <Image url={MohitPic} />
          <h5 className="righth6">Name</h5>
        </div>
        {/* 2 */}
        <div className="rightimgpic">
          <Image url={smspic} />
          <Image url={videocameraPic} />
          <Image url={telephonepic} />
        </div>
      </div>

      <div className="RightMiddle"> </div>

      <div className="RightLower">
        <InputGroup>
          <Form.Control
            placeholder="Write a message..."
            aria-label="Write a message..."
            aria-describedby="basic-addon2"
          />
          <Button id="button-addon2">Send</Button>
        </InputGroup>

        <div className="rightimgpic">
          <Image url={sms2pic} />
          <Image url={micpic} />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
