import { createSlice, createSelector} from '@reduxjs/toolkit';
import {getDailyData, getGlobalData, getCountries} from '../actions/covidActions';

/**
 * reducer for errors
 */
const covidSlice = createSlice({
    name: 'covid',
    initialState: {
      globalData: {},
      dailyData: [],
      countries: [],
      country: null,
      loading: true
    },
    reducers: {
      setCountry: (state, action) => {
        state.country = action.payload;
      }
    },

    extraReducers: {
      [getGlobalData.pending]: (state, action) => {
        state.loading = true;
       },

     [getGlobalData.fulfilled]: (state, action) => {
      state.loading = false;
      state.globalData = action.payload;
     },

     [getGlobalData.rejected]: (state, action) => {
      state.loading = false;
     },

     [getDailyData.fulfilled]: (state, action) => {
      state.dailyData = action.payload;
    },

     [getDailyData.fulfilled]: (state, action) => {
      state.dailyData = action.payload;
    },

    [getCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    }
    }
})

 export const {
setCountry
} = covidSlice.actions

export const covidSelector = createSelector(
    (state) => ({
      globalData: state.covid.globalData,
      dailyData:  state.covid.dailyData,
      countries: state.covid.countries,
      country: state.covid.country, 
      loading: state.covid.loading
     }),
 
     (state) => state
 )
 
 export default covidSlice.reducer