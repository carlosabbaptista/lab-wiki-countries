import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
import axios from 'axios'
// import countriesData from './countries.json'; USING AXIOS INSTEAD
import Navbar from './components/Navbar'; // Import Navbar
import CountriesList from './components/CountriesList'; // Import CountriesList
import CountryDetails from './components/CountryDetails'; // Import CountryDetails

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Make a GET request to the API
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        // Set the countries state with the response data
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run this effect once

  // useEffect(() => {
  //   Set the countries state with the imported data
  //   setCountries(countriesData);
  // }, []);

  return (
    <Router> {/* Wrap the entire app with the Router */}
      <div className="App">
        <Navbar />
        <div className="container"> {/* Add a Bootstrap container div */}
          <div className="row">
            <CountriesList countries={countries} /> {/* Render CountriesList */}
            <Switch> {/* Use Switch to handle route matching */}
              {/* React-Router Route rendering the CountryDetails */}
              <Route
                path="/:alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;