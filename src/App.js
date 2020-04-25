import React from 'react';
import { Route } from "react-router-dom";
import { UkrainianCitysWeatherWrapped as UkrainianCitysWeather } from './components/UkrainianCitysWeather/UkrainianCitysWeatherContainer';
import { SearchWorldwideCityWrapped as SearchWorldwideCity } from './components/SearchWorldwideCity/SearchWorldWideCityContainer';

function App() {
  return (
    <>
      <Route exact path="/" component={UkrainianCitysWeather} />
      <Route exact path="/search" component={SearchWorldwideCity} />
    </>
  );
}

export default App;
