import React, { useState } from 'react'
import './insertData.css'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'
function InsertData() {
const navigate = useNavigate();
const [name , setName] = useState('');
const [address , setAddress] = useState('');
const [city , setCity] = useState('');
const [country , setCountry] = useState('');
const [pincode , setPincode] = useState(null);
const [score , setScore] = useState(null);
const [alert , setAlert] = useState(true);
const handleSubmit=async (e)=>
{
  e.preventDefault();
  const user = {name , address , city , country , pincode , score};
  const response = await fetch("http://localhost:8082/users" , {method:'POST' ,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  } ,  body:JSON.stringify(user)});
  const data =await response.text();
  if(data === 'user already exist')
  {
      setAlert(false);
  }
  else{
      navigate("/view");
  }
  

}






  return (
<div>
<Navbar/>

    <div class="body">
        
  <div class="wrapper">
  
    <h2>Insert Data</h2>
    <form onSubmit={handleSubmit}>
      <div class="input-box">
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value); setAlert(true)}} required/>
      </div>
      <span style={{color:"red"}}  hidden={alert}>Username already exist</span>
      <div class="input-box">
        <input type="text" placeholder="Enter your address" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your city" value={city} onChange={(e)=>setCity(e.target.value)} required/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your country" value={country} onChange={(e)=>setCountry(e.target.value)} required/>
      </div>
      <div class="input-box">
        <input type="number" placeholder="Enter your pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} required/>
      </div>
      <div class="input-box">
        <input type="number" placeholder="Enter your score" value={score} onChange={(e)=>setScore(e.target.value)} required/>
      </div>
     
      <div class="input-box button">
        <input type="Submit" value="Insert Data"/>
      </div>
    </form>
  </div>
    </div>


    </div>
  )
}

export default InsertData