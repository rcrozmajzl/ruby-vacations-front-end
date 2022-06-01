import React from "react";
import {useState, useEffect} from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../Components/NavBar/NavBar.js';
import AvailableHouses from '../Components/AvailableHouses/AvailableHouses.js';
import UserProfile from '../Components/UserProfile/UserProfile.js';
import MyReviews from '../Components/MyReviews/MyReviews.js';
import MyVisits from '../Components/MyVisits/MyVisits.js';
import LoginForm from '../Components/LoginForm/LoginForm.js';
import SignUpForm from '../Components/SignUpForm/SignUpForm.js';
import LoginSignUpPage from '../Components/LoginSignUpPage/LoginSignUpPage.js';
import HouseProfile from '../Components/HouseProfile/HouseProfile.js';


function App() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  },[]);


  return (
    <div className="App">
      <h1>Welcome to Ruby Vactions!</h1>
        <NavBar />
        <Switch>
          <Route exact path="/">
              <LoginSignUpPage />
          </Route>
          <Route path="/availablehouses">
              <AvailableHouses />
          </Route>
          <Route path="/userprofile">
            <UserProfile/>
          </Route>
          <Route path="/myvisits">
            <MyVisits/>
          </Route>
          <Route path="/myreviews">
            <MyReviews reviews={reviews} setReviews={setReviews}/>
          </Route>
          <Route path="/availablehouses/:id">
            <HouseProfile/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
