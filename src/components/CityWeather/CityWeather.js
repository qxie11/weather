import React, { useState, useEffect } from 'react';
import "./CityWeather.scss";

const CityWeather = ({ city, rusCity, data, loadData }) => {

    const [isAdvanced, setAdvance] = useState(false);
    const [_icon, setIcon] = useState('');

    useEffect(() => {
        if (!data[city]) {
            loadData(city);
        }
    }, [])

    useEffect(() => {
        if (data[city] && !_icon) {
            const icon = data[city].weather[0].icon;
            setIcon(`https://openweathermap.org/img/wn/${icon}@2x.png`);
        }
    })

    return (
        <div className="ukraine-weather__city weather__city" style={{ backgroundImage: `url(${_icon && _icon})` }}>
            {
                _icon ? !isAdvanced ? (<>
                    <p className="ukraine-weather__city-name">{rusCity}</p>
                    <p className="ukraine-weather__city-country">UA</p>
                    <p className="ukraine-weather__city-temp">{Math.round(data[city].main.temp)}&deg;</p>

                </>) :
                    (<>
                        <p className="ukraine-weather__city-describe">{data[city].weather[0].main}</p>
                        <p className="ukraine-weather__city-pressure">Давление: {data[city].main.pressure} Пск</p>
                        <p className="ukraine-weather__city-humidity">Влажность: {data[city].main.humidity}%</p>
                        <p className="ukraine-weather__city-wind">Ветер: {data[city].wind.speed} км/ч</p>
                    </>)
                    :
                    (
                        <div className="loading"></div>
                    )
            }
            {_icon && <p className="ukraine-weather__city-advance" onClick={() => setAdvance(!isAdvanced)} >{isAdvanced ? "Назад" : "Подробнее..."}</p>}
        </div>
    );
}

export default CityWeather;

