import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCountries, getGlobalData} from 'store/actions/covidActions';
import { covidSelector, setCountry } from 'store/slices/covidSlice';

const CountryPicker = () => {
    const {countries} = useSelector(covidSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
        return () => {}
    }, [dispatch]);

    const handleChange = (e) => {
        dispatch(setCountry(e.target.value));
         dispatch(getGlobalData(e.target.value));
    }

    if(!countries.countries){
        return <div></div>
    }
    return (
        <div className="row py-3">
            <div className="col-md-6 mx-auto text-center">
                <select className="form-control" name="country" defaultValue="Global"
                onChange={handleChange}
                >
             <option value="">Global</option>
             {countries.countries.map((country, i)=> <option key={i} value={country.name}>{country.name}</option>)}
             </select>
            </div>
        </div>
    );
}

export default CountryPicker;
