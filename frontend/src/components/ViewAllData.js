import React, { useEffect, useState } from 'react'
import './viewAllData.module.css'
import Navbar from './Navbar'
function ViewAllData() {

const [users , setUsers] = useState([]);
const getAllUsers = async ()=>{
  const response = await fetch("http://localhost:8082/users");
  const data = await response.json();
  setUsers(data);
}
useEffect(()=>{
getAllUsers();
} , []);

  return (
<div>
<Navbar/>

    <div class="body">    
  <div class="wrapper" style={{  minWidth:"80%"}}>
    <h2>View All Data</h2>
<table>
  <tr>
    <th>Name</th>
    <th>Address</th>
    <th>City</th>
    <th>Country</th>
    <th>Pincode</th>
    <th>Score</th>
    <th>Result</th>
  </tr>
    {
      users.map((user)=>{
       return  <tr>
        <td>{user.name}</td>
        <td>{user.address}</td>
        <td>{user.city}</td>
        <td>{user.country}</td>
        <td>{user.pincode}</td>
        <td>{user.score}</td>
        <td>{user.result}</td>
        </tr>

      })

    }



</table>

  </div>
    </div>


    </div>
  )
}

export default ViewAllData