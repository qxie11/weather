import React, { Component } from 'react';
import CityWeather from '../CityWeather/CityWeather';
import SearchInput from './SearchInput/SearchInput';
import "./UkrainianCity.scss";


class UkrainianCitysWeather extends Component {

    render() {
        const { removeCity, cityList, data, loadData } = this.props;
        return (
            <div className="ukraine-weather">
                <SearchInput removeCity={removeCity} cityList={cityList} />
                {
                    cityList.map((city) => <CityWeather key={city} city={city[0]} rusCity={city[1]} data={data} loadData={loadData} />)
                }
            </div>
        );
    }
}

export default UkrainianCitysWeather;