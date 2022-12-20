import React, { Children } from "react";
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
import axios from "axios";
import { useEffect,useState } from "react";
import { ListGroup } from "react-bootstrap";
import Dropzone from 'react-dropzone'

const RightComponent = ({socket}) => {
  
  const [messageList, setMessageList] = useState([]);   
  const [Currentmessage, setCurrentMessage] = useState("");
  //axios.get("http://localhost:3000/mod1/", { params: { token: window.localStorage.getItem("token")} })


useEffect(() => { 
     axios.get("http://localhost:3000/mod1/", { headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`} })
    .then((data)=> {setMessageList(data.data)
      console.log(data); })
    .catch(err=>console.log(err))  
    
},[])
console.log("messageList",messageList);

 const socketEvents=()=>{
  socket.on("receive_message",(data)=>{
    console.log("200",data);  
    setMessageList([...messageList,data])  

  })
 }
 socketEvents();


//input function
const handlechangeinput=(event)=>{
  setCurrentMessage(event.target.value)
  
}

const addingmessagebtn= async ()=>{
    console.log("btn click");   
 
    //sendind data to server by post 
    const mess = await axios.post("http://localhost:3000/mod1",{
      sms:Currentmessage,
      sender:"Mohit",
      receiver:"Faizan",
      time:"27-nov-2023"
    })// .then(res=>{console.log(res)})
    console.log("post",mess.data)

    setMessageList([...messageList,mess.data])    
   
    socket.emit("send_message",mess.data)
    setCurrentMessage("");

}



const   fileSelectedHandle = async(file)=>{
  //event.preventDefault()
  console.log(file)
 let formData = new FormData();
 
 const config ={
  header:{"content-type": 'multipart/form-data'}
 }

 formData.append("file",file[0]); 
 console.log("9999966  ",file);
 await axios.post("http://localhost:3000/chat/upload",formData,config)
 .then(response =>{
     if(response.data.success){
      let c=response.data.url;      
      console.log("aya" ,c)
   
     setMessageList([...messageList,{ sms:c, sender: 'Mohit', receiver: 'Faizan', time: '27-nov-2023' }]) 

     socket.emit("send_message",{ sms:c, sender: 'Mohit', receiver: 'Faizan', time: '27-nov-2023' })
     
     }

 })  
   
}



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
    
   {
    messageList?.map((item,index)=>{
      return ( item.sender==="Mohit"?
        //<div className="RightMiddleLeftSpan" >{ item.sms}</div>:  
        <div className="RightMiddleLeftSpan" >{ 
          item.sms.substring(0,7)==="upload/"?
        <img style={{maxWidth:'50px'}} src={`http://localhost:3000/${item.sms}`}/>:
        item.sms 
        }</div>:

        <div className="RightMiddleRightSpan">{item.sms}</div>
      )
      
    })
   } 

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
          <Button id="button-addon2" onClick={addingmessagebtn}>Send</Button>
        </InputGroup>

        <div className="rightimgpic">        
         <Dropzone onDrop={fileSelectedHandle}>
         {({getRootProps, getInputProps}) => (
        <section>
         <div {...getRootProps()}>
        <input {...getInputProps()} />
        <span ><Image url={sms2pic}/></span> 
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
