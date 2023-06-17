import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1 class="title">Admission Form</h1>
    <div class="container">
      <form class="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" />

        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="phone">Phone number:</label>
        <input type="tel" id="phone" />

        <label htmlFor="address">Address:</label>
        <textarea id="address" rows="4"></textarea>

        <label htmlFor="blood">Blood Group:</label>
        <input type="text" id="bgrp" />

        <label htmlFor="father">Father's Name:</label>
        <input type="text" id="fname" />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default App;
