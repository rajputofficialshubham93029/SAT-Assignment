import React from 'react'
import './insertData.css'
import Navbar from './Navbar'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function UpdateScore() {
  const navigate = useNavigate();
  const [users , setUsers] = useState([]);
  const[selectedValue , setSelectedValue] = useState(0);
  const [score , setScore] = useState(null);
  const getAllUsers = async ()=>{
    const response = await fetch("http://localhost:8082/users");
    const data = await response.json();
    if(data.length !== 0)
    {
        setScore(data[0].score);
    }
    setUsers(data);
  }
  useEffect(()=>{
  getAllUsers();
  } , []);

  const handleChange =(e)=>{
    setSelectedValue(e.target.value);
    setScore(users[e.target.value].score);
  }

  const handleSubmit=async (e)=>
{
  e.preventDefault();
  const response = await fetch("http://localhost:8082/users" , {method:'PUT' ,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  } ,  body:JSON.stringify({name:users[selectedValue].name , score:score})});
    const data =await response.text();
      navigate("/view");
  
  

}

  return (
<div>
<Navbar/>

    <div class="body">
        
  <div class="wrapper">
  
    <h2>Update Score</h2>
    <form onSubmit={handleSubmit}>
      <label>Select Name</label>
    <select name="languages" value={selectedValue} id="lang" class="input-box" style={{width:"100%" , border: "1.5px solid #C7BEBE"}} onChange={handleChange}>
    {
      users.map((user , index)=>{
        return <option value={index} >{user.name}</option>
      })
     }
      </select>

      <label>Enter Score</label>
      <div class="input-box">
        <input type="number" value={score} onChange={(e)=> setScore(e.target.value)} required/>
      </div>
      <div class="input-box button">
        <input type="Submit" value="Update Data"/>
      </div>
    </form>
  </div>
    </div>


    </div>
  )
}

export default UpdateScore