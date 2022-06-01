import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from '../Components/NavBar/NavBar.js';
import AvailableHouses from '../Components/AvailableHouses/AvailableHouses.js';
import UserProfile from '../Components/UserProfile/UserProfile.js';
import MyReviews from '../Components/MyReviews/MyReviews.js';
import MyVisits from '../Components/MyVisits/MyVisits.js';
import LoginSignUpPage from '../Components/LoginSignUpPage/LoginSignUpPage.js';
import HouseProfile from '../Components/HouseProfile/HouseProfile.js';


function App() {
  const [houses, setHouses] = useState([])
  const [selectedState, setSelectedState] = useState('All')

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/authorized_user')
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => {
          setIsAuthenticated(true)
          setUser(user)
        })
      }
    })
  }, [])

  useEffect(() => {
      fetch('/houses')
      .then(r => r.json())
      .then(data => setHouses(data))
  },[])

  const filterHouses = () => {
      let filteredHouses = [...houses]
      if(selectedState === "All"){
          filteredHouses = [...houses]
      } else {
          filteredHouses = [...houses].filter(h => h.location.toLowerCase().includes(selectedState.toLowerCase()))
      }
      return filteredHouses
  }

  if(!user) return <LoginSignUpPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

  return (
    <Router>
      <div className="App">
        <h1>Welcome to Ruby Vactions!</h1>
        <NavBar />
        <Switch>
          <Route exact path="/">
              {isAuthenticated ? <Redirect to="/availablehouses"/> : <LoginSignUpPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />}
          </Route>
          <Route exact path="/availablehouses">
              {isAuthenticated ? <AvailableHouses houses={filterHouses} selectedState={selectedState} setSelectedState={setSelectedState}/> : <Redirect to="/"/>}
          </Route>
          <Route path="/userprofile">
            {isAuthenticated ? <UserProfile user={user}/> : <Redirect to="/"/>}
          </Route>
          <Route path="/myvisits">
            {isAuthenticated ? <MyVisits user={user}/> : <Redirect to="/"/>}
          </Route>
          <Route path="/myreviews">
            {isAuthenticated? <MyReviews user={user}/> : <Redirect to="/"/>}
          </Route>
          <Route path="/availablehouses/:id">
            {isAuthenticated ? <HouseProfile/> : <Redirect to="/"/>}
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
