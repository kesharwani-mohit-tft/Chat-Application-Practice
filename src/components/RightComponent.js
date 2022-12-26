import React, { Children } from "react";
import Image from "./Image";
import MohitPic from "../assets/Image/MohitPic.jpg";
import smspic from "../assets/Image/sms.png";
import videocameraPic from "../assets/Image/videocamera.png";
import telephonepic from "../assets/Image/telephone.png";
import upload from "../assets/Image/upload.png";
import micpic from "../assets/Image/mic.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import fileDownload from "js-file-download";

const RightComponent = ({ socket }) => {
  const [messageList, setMessageList] = useState([]);
  const [Currentmessage, setCurrentMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/message/", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((data) => {
        setMessageList(data.data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("messageList", messageList);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("200", data);
      setMessageList([...messageList, data]);
    });

    socket.on("file-download", (data) => {
      console.log("789", data);
      fileDownload(data, "filename.png");
    });
  }, []);

  //input function
  const handlechangeinput = (event) => {
    setCurrentMessage(event.target.value);
  };

  const addingmessagebtn = async () => {
    console.log("btn click");

    //sendind data to server by post
    const mess = await axios.post("http://localhost:3000/message", {
      sms: Currentmessage,
      sender: "Mohit",
      receiver: "Faizan",
    });
    console.log("post", mess.data);

    setMessageList([...messageList, mess.data]);

    socket.emit("send_message", mess.data);
    setCurrentMessage("");
  };

  const fileSelectedHandle = async (file) => {
    //event.preventDefault()
    console.log(file);
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", file[0]);
    console.log("9999966  ", file);
    await axios
      .post("http://localhost:3000/chat/upload", formData, config)
      .then((response) => {
        if (response.data.success) {
          let c = response.data.url;
          console.log("image url", c);

          setMessageList([
            ...messageList,
            { sms: c, sender: "Mohit", receiver: "Faizan" },
          ]);

          socket.emit("send_message", {
            sms: c,
            sender: "Mohit",
            receiver: "Faizan",
          });
        }
      });
  };

  const downloading = (sms) => {
    console.log("ooopooo", sms);

    axios
      .get("http://localhost:3000/download/file", { params: { download: sms } })
      .then((data) => {
        console.log("downloading", data);
      })
      .catch((err) => console.log(err));
  };

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

      <div className="RightMiddle">
        {messageList?.map((item, index) => {
          return item.sender === "Mohit" ? (
            // <div className="RightMiddleLeftSpan" onClick={()=>downloading(item.sms)} >{ item.sms}</div>:
            <div key={index} className="RightMiddleLeftSpan">
              {item.sms.substring(0, 7) === "upload/" ? (
                <div className="filebtn" onClick={() => downloading(item.sms)}>
                  {item.sms}
                </div>
              ) : (
                //     <div style={{display:"flex",flexDirection:"column"}}>
                //     <img style={{maxWidth:'50px'}} src={`http://localhost:3000/${item.sms}`}/>
                //  <Button style={{maxWidth:'100%',maxHeight:'20px',paddingBottom:"20px",}} variant="outline-success" onClick={()=>downloading(item.sms)}>{"\u21E9"}</Button>
                //   </div>
                item.sms
              )}
            </div>
          ) : (
            <div key={index} className="RightMiddleRightSpan">
              {item.sms}
            </div>
          );
        })}
      </div>

      <div className="RightLower">
        <InputGroup>
          <Form.Control
            placeholder="Write a message..."
            aria-label="Write a message..."
            aria-describedby="basic-addon2"
            onChange={handlechangeinput}
            value={Currentmessage}
          />
          <Button id="button-addon2" onClick={addingmessagebtn}>
            Send
          </Button>
        </InputGroup>

        <div className="rightimgpic filebtn">
          <Dropzone onDrop={fileSelectedHandle}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <span>
                    <Image url={upload} />
                  </span>
                </div>
              </section>
            )}
          </Dropzone>
          <Image url={micpic} />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
