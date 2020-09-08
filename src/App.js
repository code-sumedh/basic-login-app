import React from 'react';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import image3 from './Images/3.jpg'


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
           <input type="text" id="password" name="password" placeholder="******" />

  
           <input type="submit" value="Sign Up"  onClick={loginHandler}/>
         </form>
         <p>Already have an account? <b>Log in here</b></p>

        </div>
       </div>

      <div className="split right">
        <AliceCarousel autoPlay autoPlayInterval="3000">
         <img src={image1} className="sliderimg"/>
         <img src={image2} className="sliderimg"/>
         <img src={image3} className="sliderimg"/>
        </AliceCarousel>
      </div>
    </div>
  );
}

export default App;
