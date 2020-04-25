import {
    UPDATE_WORLDWIDE_DATA
} from "../actions/actionCreators";

const initialState = {
    worldwideData: {}
}

export const worldwideCitysReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_WORLDWIDE_DATA:
            return {
                ...state,
                worldwideData: action.payload
            }

        default:
            return state;
    }
}

