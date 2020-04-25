import React, { useState, useEffect } from 'react';
import "./WorldwideCity.scss";

const WorldwideCity = ({ data }) => {

    const [isAdvanced, setAdvance] = useState(false);
    const [_icon, setIcon] = useState(false);

    useEffect(() => {
        if (Object.keys(data).length !== 0 && !_icon && !data.error) {
            const icon = data.weather[0].icon;
            setIcon(`https://openweathermap.org/img/wn/${icon}@2x.png`);
        }
    })

    return (
        <div className="worldwide-weather__city weather__city" style={{ backgroundImage: `url(${_icon && _icon})` }}>
            {
                _icon || data.error ? !isAdvanced ? (<>
                    {
                        !data.error ? <> <p className="worldwide-weather__city-name">{!data.error && data.name}</p>
                            <p className="worldwide-weather__city-country">{!data.error && data.sys.country}</p>
                            <p className="worldwide-weather__city-temp">{!data.error && Math.round(data.main.temp) + '°'}</p></> :
                            <p className="worldwide-weather__city-error">{data.error && data.error}</p>
                    }

                </>) :
                    (<>
                        <p className="worldwide-weather__city-describe">{data.weather[0].main}</p>
                        <p className="worldwide-weather__city-pressure">Давление: {data.main.pressure} Пск</p>
                        <p className="worldwide-weather__city-humidity">Влажность: {data.main.humidity}%</p>
                        <p className="worldwide-weather__city-wind">Ветер: {data.wind.speed} км/ч</p>
                    </>)
                    :
                    (
                        <div className="loading"></div>
                    )
            }
            {_icon && !data.error && <p className="worldwide-weather__city-advance" onClick={() => setAdvance(!isAdvanced)} >{isAdvanced ? "Назад" : "Подробнее..."}</p>}
        </div>
    );
}

export default WorldwideCity;

