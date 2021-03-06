import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getDailyData} from 'store/actions/covidActions';
import { covidSelector } from 'store/slices/covidSlice';
import {Line, Bar} from 'react-chartjs-2';
import { ChartLoader } from './Loaders';

const Chart = () => {
    const {dailyData, globalData, country, loading} = useSelector(covidSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {}
    }, [globalData]);

    useEffect(() => {
        return () => {}
    }, [country]);

    useEffect(() => {
        dispatch(getDailyData());
        return () => {}
    }, [dispatch]);

    // if(country){
    //  if(!globalData || Object.keys(globalData).length === 0){
    //         return <ChartLoader />
    //     }
    // }
    if(loading){
        return <ChartLoader />
    }

    const {confirmed, deaths, recovered} = globalData;
    const lineChart = (
        <Line 
        data={{
          labels: dailyData.map(({reportDate}) => reportDate),
          datasets: [
            {
              label: 'Infected',
              data: dailyData.map(({confirmed}) => confirmed.total),
              borderColor: '#3333ff',
              fill: true
            },

            {
              label: 'Deaths',
              data: dailyData.map(({deaths}) => deaths.total),
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true
            },
            
          ]
        }}
      />
    );

    const bar = (
        <Bar 
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)'
            ],
            data: [confirmed?.value, recovered?.value, deaths?.value]
          }]

        }}
        options ={{
          legend: {display: false},
          title: {display: true, text: `Current state in ${country}`}
           
        }}
      /> 
    );

   

    return (
        <div className="row mx-1">
           <div className="col-md-12 bg-white">
           {country ? bar : lineChart}
           </div>
        </div>
    );
}

export default Chart;
