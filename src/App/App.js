import React from "react";
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
  return (
    <div className="App">
      <h1>Welcome to Ruby Vactions!</h1>
      <NavBar />
      {/* <Switch>
        <Route path="/availablehouses" element={<AvailableHouses/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/myvisits" element={<MyVisits/>} />
        <Route path="/myreviews" element={<MyReviews/>} />
        <Route path="/availablehouses/:id" element={<HouseProfile/>} />
      </Switch> */}
    </div>
  );
}

export default App;
