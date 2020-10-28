import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData();

            setDailyData(dailyData);
        }
        
        fetchAPI();
    });

    const lineChart = (
         dailyData.length != 0 ? (<Line 
            data= {{
                labels: dailyData(({ date }) => date),
                datasets: [{
                    data: dailyData(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor:'#3333ff',
                    fill: true,
                },{
                    data: dailyData(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor:'red',
                    backgroundColor: 'rgba(139,0,0)',
                    fill: true,
                }]
            }}
          />) : null 
    );

    return (<div className={styles.container}>
        {}
    </div>)
}

export default Chart;