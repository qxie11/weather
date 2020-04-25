import {
    REMOVE_CITY,
    SET_DATA
} from "../actions/actionCreators";
import { listOfCitys } from "../constans";

const initialState = {
    cityList: listOfCitys,
    data: {},
}

export const ukrainianCitysReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_CITY:
            return {
                ...state,
                cityList: action.payload
            }
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

