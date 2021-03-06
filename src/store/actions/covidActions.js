import { createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

let baseUrl = 'https://covid19.mathdro.id/api';

/**
 * get either global data or country specific based on url
 */

export const getGlobalData = createAsyncThunk(
    'covid/globalData',
 async (country = undefined, thunk) => {
     let url;
     if(country){
       url = `${baseUrl}/countries/${country}`;
     }else{
       url = baseUrl;
     }
      try {
     const res = await axios.get(url);
      return res.data;  
      } catch (error) {
        return thunk.rejectWithValue(error.message)
      }
    }
  );


  /**
   * get daily data
   */
  export const getDailyData = createAsyncThunk(
    'covid/dailyData',
      async (_, thunk) => {
     
      try {
     const res = await axios.get('https://covid19.mathdro.id/api/daily');

    return res.data;   
      } catch (error) {
        return thunk.rejectWithValue(error.message)
      }
    }
  );
  

  /**
   * get list of countries
   */
  export const getCountries = createAsyncThunk(
    'covid/countries',
      async (_, thunk) => {
     
      try {
     const res = await axios.get('https://covid19.mathdro.id/api/countries');

     return res.data;  

      } catch (error) {
        return thunk.rejectWithValue(error.message)
      }
    }
  );