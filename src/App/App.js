import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from '../Components/NavBar/NavBar.js';
import AvailableHouses from '../Components/AvailableHouses/AvailableHouses.js';
import UserProfile from '../Components/UserProfile/UserProfile.js';
import MyReviews from '../Components/MyReviews/MyReviews.js';
import MyVisits from '../Components/MyVisits/MyVisits.js';
import LoginSignUpPage from '../Components/LoginSignUpPage/LoginSignUpPage.js';
import HouseProfile from '../Components/HouseProfile/HouseProfile.js';

import './App.css';


function App() {
  const [reviews, setReviews] = useState([]);
  const [houses, setHouses] = useState([])
  const [selectedState, setSelectedState] = useState('All')

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log('isAuthenticated: ', isAuthenticated);
  const [user, setUser] = useState(null);
  console.log('user: ', user);

  useEffect(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  
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
  }, []);

  useEffect(() => {
    fetch('/houses')
    .then(r => r.json())
    .then(data => setHouses(data))
    },[])

  const filterHouses = () => {
      if(selectedState === "All"){
          return houses
      } else {
          return houses.filter(h => h.location.toLowerCase().includes(selectedState.toLowerCase()))
      }
  }

  if(!isAuthenticated) return <LoginSignUpPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

  return (
    <Router>
      <div className="App">
        <h1>Welcome to Ruby Vactions!</h1>
        <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
        <Switch>
          {/* <Route exact path="/">
              <LoginSignUpPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
          </Route> */}
          <Route path="/availablehouses">
              <AvailableHouses houses={filterHouses()} selectedState={selectedState} setSelectedState={setSelectedState}/>
          </Route>
          <Route path="/userprofile">
            <UserProfile user={user}/>
          </Route>
          <Route path="/myvisits">
            <MyVisits user={user}/>
          </Route>
          <Route path="/myreviews">
            <MyReviews reviews={reviews} setReviews={setReviews}/> 
          </Route>
          <Route path="/availablehouses/:id">
            <HouseProfile/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
