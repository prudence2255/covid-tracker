import React, {useEffect} from 'react';
import CountUp from 'react-countup';
import {useSelector, useDispatch} from 'react-redux';
import {getGlobalData} from 'store/actions/covidActions';
import { covidSelector } from 'store/slices/covidSlice';
import {CardLoader} from 'components/Loaders';

const Card = () => {
const {globalData, loading} = useSelector(covidSelector);
 const dispatch = useDispatch();
console.log(loading)
 useEffect(() => { 
     return () => {   }
 }, [globalData]);

    useEffect(() => {
        dispatch(getGlobalData());
        return () => {}
    }, [dispatch]);

if(loading){
    return <CardLoader />  
}
    // if(!globalData || Object.keys(globalData).length === 0){
    //     return <CardLoader />
    // }
    return (
        <div className="row cards">
            <div className="card-box">
                <div className="w3-card-4 bg-white infected">
                    <h4>Infected</h4>
                    <CountUp 
                     className="count"
                        start={0}
                        end={globalData.confirmed.value}
                         duration={2.5}
                        separator="," 
                    />
                    <div className="date">{new Date(globalData.lastUpdate).toDateString()}</div>
                    <p>
                        Number of active cases of COVID-19
                    </p>
                </div>
            </div>
            <div className="card-box">
                <div className="w3-card-4 bg-white recovered">
                    <h4>Recovered</h4>
                    <CountUp 
                    className="count"
                        start={0}
                        end={globalData.recovered.value}
                         duration={2.5}
                        separator="," 
                    />
                    <div className="date">{new Date(globalData.lastUpdate).toDateString()}</div>
                    <p>
                        Number of recoveries from COVID-19
                    </p>
                </div>
            </div>
            <div className="card-box">
                <div className="w3-card-4 bg-white deaths">
                    <h4>Deaths</h4>
                    <CountUp 
                    
                        start={0}
                        end={globalData.deaths.value}
                         duration={2.5}
                        separator="," 
                    />
                    <div className="date">{new Date(globalData.lastUpdate).toDateString()}</div>
                    <p>
                        Number of deaths caused by COVID-19
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
