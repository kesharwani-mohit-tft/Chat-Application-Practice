import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [ user, setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({...user,[name]: value})
    }    
    console.log("321",user)

    const login = async () => {
      console.log("click")
     await axios.post("http://localhost:3000/signin/", user)
      .then(res => {
          console.log("res",res.data)
          console.log("res",res.data.status)  

          if (res.data.status === "ok") { 
            alert("login successful");
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("userdetails", JSON.stringify(res.data));
            navigate('/chatboard');
          }
          else{
            alert("Please Provide correct Login details");
          }
      })

      
  }

  return (
    <div className='LoginPage'>
       <div className='LoginPageCenter'>
       <Form>

        <h4 style={{ textAlign:"center",marginBottom:"20px"}}>Sign In</h4>

      <Form.Group className="mb-3   " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange}  />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
      </Form.Group>
   
      <Button variant="primary" type="submit" onClick={login}>
        Submit
      </Button>
      &nbsp;
      &nbsp;
      <Link to="/sign-up">
      <Button variant="primary" type="submit">
        Signup
      </Button>
      </Link>
      
      
        <div style={{textAlign:"end",marginTop:"7px",cursor: "pointer",    color: "#7d7a7a"}}>
            Forget Password
        </div> 
     
        
    </Form>
       </div>
    </div>
  )
}

export default Login