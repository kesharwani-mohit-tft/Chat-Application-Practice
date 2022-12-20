import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import axios from "axios";

const Signup = () => {
const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
});

const handleChange = (e) => {
    const { name, value } = e.target
   setUser({...user,[name]: value})
}
console.log("2000",user);

const register = async() => {
    const { name, email, password, reEnterPassword } = user
    
    if( name && email && password && (password === reEnterPassword)){       
        await axios.post("http://localhost:3000/signup/", user)
        .then( res => {
            alert("valid input 200") 
            //console.log("10000",res.data,"statuscode",res.status)                     
        })   
    } else {
        alert("invlid input")
    }

    // for empty fields after submit
    setUser({ name:"",email:"",password:"", reEnterPassword:""})
    
}



  return (
    <div className='LoginPage'>
       <div className='LoginPageCenter'>
       <Form>
     
        <h4 style={{ textAlign:"center",marginBottom:"20px"}}>Sign Up</h4>

      <Form.Group className="mb-3   " controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control  type="text" placeholder="Your Name"  name="name" value={user.name}  onChange={ handleChange }/>      
      </Form.Group>

      <Form.Group className="mb-3   " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" value={user.email}  onChange={ handleChange }/>      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" value={user.password}  onChange={ handleChange }/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Re-enter Password</Form.Label>
        <Form.Control type="password" placeholder="Re-enter Password"  name="reEnterPassword" value={user.reEnterPassword}  onChange={ handleChange } />
      </Form.Group>
   
      <Button variant="primary" type="submit" onClick={register}>
        Submit
      </Button>
      &nbsp;
      &nbsp;

      <Link to="/sign-in">
      <Button variant="primary" type="submit">
        Login
      </Button>   
      </Link>
     
        
    </Form>
       </div>
    </div>
  )
}

export default Signup