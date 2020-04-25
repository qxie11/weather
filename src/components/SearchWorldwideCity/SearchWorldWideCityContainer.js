import React from 'react';
import SearchWorldwideCity from "./SearchWorldwideCity";
import { connect } from "react-redux";
import { loadData } from '../../actions/actionCreators';

const SearchWorldwideCityContainer = ({ worldwideData, loadData }) => {
    return (
        <SearchWorldwideCity
            worldwideData={worldwideData}
            loadData={loadData}
        />
    );
}

export const SearchWorldwideCityWrapped = connect(({ worldwideCitysReducer: {
    worldwideData
} }) => ({
    worldwideData
}), {
    loadData
})(SearchWorldwideCityContainer)