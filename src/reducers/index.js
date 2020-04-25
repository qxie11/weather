import { combineReducers } from "redux";
import { ukrainianCitysReducer } from "./ukrainianCitys";
import { worldwideCitysReducer } from "./worldwideCitys";

export const rootReducer = combineReducers({
    ukrainianCitysReducer,
    worldwideCitysReducer
})