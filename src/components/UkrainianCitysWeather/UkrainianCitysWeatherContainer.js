import React from 'react';
import UkrainianCitysWeather from "./UkrainianCitysWeather";
import { connect } from "react-redux";
import { removeCity, loadData } from '../../actions/actionCreators';

const UkrainianCitysWeatherContainer = ({ cityList, data, removeCity, loadData }) => {
    return (
        <UkrainianCitysWeather
            cityList={cityList}
            data={data}
            removeCity={removeCity}
            loadData={loadData}
        />
    );
}

export const UkrainianCitysWeatherWrapped = connect(({ ukrainianCitysReducer: {
    cityList,
    data
} }) => ({
    cityList,
    data
}), {
    removeCity,
    loadData
})(UkrainianCitysWeatherContainer)