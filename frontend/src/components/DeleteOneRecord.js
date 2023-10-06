import React from 'react'
import './insertData.css'
import Navbar from './Navbar'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteOneRecord() {
  const navigate = useNavigate();
  const [users , setUsers] = useState([]);
  const[selectedValue , setSelectedValue] = useState(0);
  const getAllUsers = async ()=>{
    const response = await fetch("http://localhost:8082/users");
    const data = await response.json();
    setUsers(data);
  }
  useEffect(()=>{
  getAllUsers();
  } , []);
  const handleChange =(e)=>{
    setSelectedValue(e.target.value);
  }
  const handleSubmit=async (e)=>
{
  e.preventDefault();
  const response = await fetch("http://localhost:8082/users/"+users[selectedValue].name , {method:'DELETE'});
    const data =await response.text();
      navigate("/view");
}


  return (
<div>
<Navbar/>

    <div class="body">
        
  <div class="wrapper">
  
    <h2>Delete One Record</h2>
    <form onSubmit={handleSubmit}>
    <label>Select Name</label>
    <select name="languages" id="lang" class="input-box" style={{width:"100%" , border: "1.5px solid #C7BEBE"}} onChange={handleChange}>
    {
      users.map((user , index)=>{
        return <option value={index} >{user.name}</option>
      })
     }
      </select>
      <div class="input-box button">
        <input type="Submit" value="Delete"/>
      </div>
    </form>
  </div>
    </div>


    </div>
  )
}

export default DeleteOneRecord;