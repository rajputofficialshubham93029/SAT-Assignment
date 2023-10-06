import React from 'react'
import './homePage.css' 
function Navbar() {
  return (
    <nav>
    <div class="menu">
      <div class="logo">
        <a href="/">SAT Assignment</a>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/view">View All Data</a></li>
        <li><a href="/insert">Insert Data</a></li>
        <li><a href="/rank">Get Rank</a></li>
        <li><a href="/update">Update Score</a></li>
        <li><a href="/delete">Delete One Record</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar