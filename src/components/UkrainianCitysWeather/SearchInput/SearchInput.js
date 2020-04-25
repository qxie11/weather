import React from 'react';
import "./SearchInput.scss";
import { Link } from 'react-router-dom';
import { listOfCitys } from "../../../constans";

const SearchInput = ({ cityList, removeCity }) => {

    const searchCity = ({ target: { value } }) => {
        const newList = listOfCitys.filter((item) => item[1].toLowerCase().search(value.toLowerCase().trim()) !== -1)
        JSON.stringify(cityList) !== JSON.stringify(newList) && removeCity(newList);
    }

    return (
        <div className="ukraine-weather__search">
            <input type="text" placeholder="Одесса..." className="ukraine-weather__search-input" onChange={searchCity} />
            <Link to="/search" className="ukraine-weather__search-another">Другой город</Link>
        </div>
    );
}

export default SearchInput;