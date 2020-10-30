import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import {FetchData} from './api';

import corona from './images/corona.jpg';

export default class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount () {
        const fetchedData = await FetchData();

        this.setState({
            data: fetchedData
        });

    }

    handleCountryChange = async(country) => {
        const data = await FetchData(country);
        this.setState({
            data:data, country:country
        });
    }



    render() {
        const {data, country} = this.state;
      
        return(
            <div className={styles.container}>
                <img className={styles.image} src={corona} alt="COVID-19" />
             <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
             <Chart data={data} country={country}/>
            </div>
        )
    }
}

