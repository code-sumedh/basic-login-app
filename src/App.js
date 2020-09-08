import React from 'react';
import './App.css';
import Carousel from './Carousel';


function App() {

 const loginHandler = () => {
    alert(display);
 }

 let display = null;

 const changeHandler = (event) => {
      display = event.target.value;
 }

  return (
    <div className="App">
      <div className="split left">
        <div className="login">
         <h1>Create Account</h1>
         <form action="/action_page.php">
           <label for="fname">Email</label>
           <input type="text" id="email" name="email" placeholder="josh@gmail.com" onChange={changeHandler}/>

           <label for="lname">Password</label>
           <input type="password" id="password" name="password" placeholder="******" />

  
           <input type="submit" value="Sign Up"  onClick={loginHandler}/>
         </form>
         <p>Already have an account? <b>Log in here</b></p>

        </div>
       </div>

      <div className="split right">
      <Carousel/>
      </div>
    </div>
  );
}

export default App;
