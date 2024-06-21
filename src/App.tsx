import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Register from './Register';

function App() {

  return (
    <>
      <div>
        <img src='./src/images/logo.png'/>
        <h1>USER LOGIN</h1>
      </div>
      <div>
        <form>
          <br/>
          <input type='text' id='username' placeholder='Username'/>
          <br/>
          <input type='password' id='password' placeholder='Password'/>
          <button>LOG IN</button>
        </form>
      </div>
      <div class='signuptext'>
        <p>Don't have an account?</p>
            <a href='/Register' class='link'>Sign up</a>
      </div>
    </>
  )
}

export default App
