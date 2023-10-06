import React from 'react'
import './insertData.css'
import Navbar from './Navbar'
import { useState , useEffect } from 'react';
function GetRank() {
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

  return (
<div>
<Navbar/>
    <div class="body">
        
  <div class="wrapper">
  
    <h2>Rank</h2>
    <form >
    <label>Select Name</label>
    <select value={selectedValue} name="languages" id="lang" class="input-box" style={{width:"100%" , border: "1.5px solid #C7BEBE"}} onChange={handleChange}>
     {
      users.map((user , index)=>{
        return <option value={index} >{user.name}</option>
      })
     }
          

         
      </select>

      <label>Rank</label>
      <div class="input-box">
        <input type="number" disabled value={ users.length===0?null:Number(selectedValue)+1} required/>
      </div>


    </form>
  </div>
    </div>


    </div>
  )
}

export default GetRank