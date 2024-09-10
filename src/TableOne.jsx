import axios from "axios"
import React, { useEffect, useState } from "react" 
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Table.css";


function TableFirst() {

      const [user, setUser] = useState([])
      const navigate = useNavigate()

  useEffect(()=>{axios.get('https://66bf2a9e42533c40314547d5.mockapi.io/FormOne').then((data)=> {console.log(data)
    setUser(data.data)
  })
  .catch(error=> console.log(error))

  },[])

  const postIdToDelete = (id)=>{axios.delete(`https://66bf2a9e42533c40314547d5.mockapi.io/FormOne/${id}`).then(response=>{
    console.log('Delte Post with ID' )
    location.reload()
  } )
}

const getData = (id, fname, lname, mail) =>{
  console.log(`id: ${id}, fname: ${fname} lname: ${lname} mail: ${mail}`)

  localStorage.setItem('id',id)
  localStorage.setItem('fname',fname)
  localStorage.setItem('lname',lname)
  localStorage.setItem('mail',mail)

  navigate('/UpdateTable')
}

const nav = useNavigate()
const navgate = () => {
  nav('/Farm')
}


  return (

    <>
<div className="tabOne">

  <h1> User Details </h1>  

    <Table striped bordered hover>
      <thead>
        <tr>
          <th> ID </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail</th>
          <th>Action </th>
        </tr>
      </thead>
      <tbody>
        {user.map(item =>(
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.fname} </td>
          <td> {item.lname}</td>
          <td> {item.mail}</td>
          <td> <Button onClick={()=>getData(item.id, item.fname, item.lname, item.mail)} variant="outline-primary">Update</Button>{' '}
          <Button onClick={()=>postIdToDelete(item.id)} variant="outline-danger">Delete</Button>{' '}
          </td>
        </tr>

        ))}    
           </tbody>      
           </Table>

           <div className="butnOne"> 
           <div className="d-grid gap-2">
      <Button onClick={navgate} variant="primary" size="lg">
        Click here for New Registration
      </Button>
      </div>   
      </div>
      </div>
      </>
  
  );
}

export default TableFirst;
