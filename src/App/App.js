import React, {useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../Components/NavBar/NavBar.js';
import AvailableHouses from '../Components/AvailableHouses/AvailableHouses.js';
import UserProfile from '../Components/UserProfile/UserProfile.js';
import MyReviews from '../Components/MyReviews/MyReviews.js';
import MyVisits from '../Components/MyVisits/MyVisits.js';
import LoginSignUpPage from '../Components/LoginSignUpPage/LoginSignUpPage.js';
import HouseProfile from '../Components/HouseProfile/HouseProfile.js';


function App() {
  const [reviews, setReviews] = useState([]);
  const [houses, setHouses] = useState([])
  const [selectedState, setSelectedState] = useState('All')

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  },[]);
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
  })
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

  return (
    <div className="App">
      <h1>Welcome to Ruby Vactions!</h1>
        <NavBar />
        <Switch>
          <Route exact path="/">
              <LoginSignUpPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route exact path="/availablehouses">
              <AvailableHouses houses={filterHouses()} selectedState={selectedState} setSelectedState={setSelectedState} />
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
