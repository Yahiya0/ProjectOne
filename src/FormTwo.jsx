import react from "react";
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";



const Farm = () => {
    
    const [detail, setDetail] = useState({fname:"", lname:"", mail:""});
    const nav = useNavigate()

    const inputHandler = (e)=>{
        const {name, value} = e.target;

        setDetail(prev =>({
            ...prev, 
            [name]:value
    }))
    }       
      
    const click = (F) => {
        F.preventDefault()

        axios.post('https://66bf2a9e42533c40314547d5.mockapi.io/FormOne', {
            fname: detail.fname,
            lname: detail.lname,
            mail:  detail.mail
          })
          .then(function (response) {
            console.log(response);
            toast.success("Detials submitted successfully")
          })
          .catch(function (error) {
            console.log(error);
            toast.error("Wrong Input")
          });
        console.log(detail)
        nav('/')
        }
const navgte = () =>{
  nav('/')
}
          
          

    return(
      <>

    <div className="details">
            <h1> New Registration </h1>
        
        <form>
        <div className="fill">
            <label>Enter your name *</label><br/>
            <Form.Control type="text" name="fname" onChange={inputHandler} value={detail.fname} placeholder="Enter your name" /> <br/>
            <label>Enter your last name *</label><br/>
            <Form.Control type="text" name="lname" value={detail.lname} onChange={inputHandler} placeholder="Enter Last name" /><br/>
            <label>Enter your Email adrress *</label> <br/>
            <Form.Control type="text" name="mail" value={detail.mail} onChange={inputHandler} placeholder="Enter Email address" /> <br/>
           <div className="btn"> <Button as="input" type="submit" onClick={click} value="Submit" />{' '} </div>
            </div>
            </form>

            <div className="butnTwo"> 
<div className="d-grid gap-2">
<Button onClick={navgte} variant="primary" size="lg">
Go Back to your Table
</Button>
</div>  
</div>
        </div>




        </>
)
} 

export default Farm 