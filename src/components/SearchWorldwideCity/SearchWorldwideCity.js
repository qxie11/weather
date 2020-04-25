import React from 'react';
import "./SearchWorldwideCity.scss";
import WorldwideCity from './WorldwideCity/WorldwideCity';

const SearchWorldwideCity = ({ worldwideData, loadData }) => {

    const searchCity = ({ currentTarget }) => {
        const country = currentTarget.previousElementSibling.value;
        const city = currentTarget.previousElementSibling.previousElementSibling.value;
        country && city && loadData(city, country, true);
    }

    return (
        <div className="search-worldwide">
            <div className="container">
                <div className="search-worldwide__area">
                    <input type="text" placeholder="Type city in English..." className="search-worldwide__city" />
                    <input type="text" placeholder="Type country in English..." className="search-worldwide__country" />
                    <button className="search-worldwide__button" onClick={searchCity}>Search</button>
                </div>
                {Object.keys(worldwideData).length !== 0 && <WorldwideCity data={worldwideData} />}
            </div>
        </div>
    );
}

export default SearchWorldwideCity;

