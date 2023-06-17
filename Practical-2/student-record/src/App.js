import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <h1 class="title">Admission Form</h1>
      <form class="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" />

        <label htmlFor="address">Address:</label>
        <textarea id="address" rows="4"></textarea>

        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
