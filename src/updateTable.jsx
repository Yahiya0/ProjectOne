import axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Prev } from "react-bootstrap/esm/PageItem";
import { useNavigate } from "react-router-dom";
import "./UpdateTable.css"




const UpdateTable = ()=>{

    const navigate = useNavigate()

     const [name, setName] = useState({fname:localStorage.getItem('fname'), lname:localStorage.getItem('lname'), 
        mail:localStorage.getItem('mail'), id:localStorage.getItem('id')})

        const change = (e) => {
           const {name, value} = e.target

           setName(prev =>({
            ...prev, 
            [name]:value
    }))
    }       
        
        const update = () => {
            
        axios.put(`https://66bf2a9e42533c40314547d5.mockapi.io/FormOne/${name.id}`, {fname:name.fname, lname:name.lname, 
            mail:name.mail}).then(response =>{console.log(response)} ) 
        .catch(error=> console.log(error));

            navigate('/')

        }

        const nav = useNavigate()
        const navgte = () => {
          nav('/')

        }

    return(

        <div className="detail">
            <h1> Update Your Form </h1>
        
    <form>
        <div className="fills">
            <Form.Control type="hidden" value={name.id} name="id" /><br/>
            <label>Enter your name *</label><br/>
            <Form.Control type="text" value={name.fname} onChange={change} name="fname" placeholder="Enter your name" /> <br/>
            <label>Enter your last name *</label><br/>
            <Form.Control type="text" value={name.lname} onChange={change} name="lname"  placeholder="Enter Last name" /><br/>
            <label>Enter your Email adrress *</label> <br/>
            <Form.Control type="text" name="mail" value={name.mail} onChange={change} placeholder="Enter Email address" /> <br/>
           <div className="btn" onClick={update}> <Button as="input" type="submit" value="Update" />{' '} </div>
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

    )
}

export default UpdateTable



