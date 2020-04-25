import { key as Key } from '../constans';
export const REMOVE_CITY = "REMOVE_CITY";
export const SET_DATA = "SET_DATA";
export const UPDATE_WORLDWIDE_DATA = "UPDATE_WORLDWIDE_DATA";


export const removeCity = (cityList) => ({
    type: REMOVE_CITY,
    payload: cityList
})

export const setData = (data) => ({
    type: SET_DATA,
    payload: data
})

export const setWorldwideData = (worldwideData) => ({
    type: UPDATE_WORLDWIDE_DATA,
    payload: worldwideData
})

export const loadData = (city, country = "Ukraine", isWorldWide = false, key = Key) => (dispatch, getState) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=metric`)
        .then((res) => {
            if (res.status !== 404) {
                return res.json().then((json) => {
                    if (!isWorldWide) {
                        const { ukrainianCitysReducer: { data } } = getState();
                        const newData = Object.assign({}, data);
                        newData[city] = json;
                        dispatch(setData(newData))
                    } else {
                        dispatch(setWorldwideData(json));
                    }
                })
            } else {
                dispatch(setWorldwideData({ error: res.statusText }));
            }
        })

}