import {combineReducers} from 'redux';
import covidReducer from './covidSlice';

/** 
 * root reducer
*/
 const rootReducer = combineReducers({ 
    covid: covidReducer,
   });


 export default rootReducer;  