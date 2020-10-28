import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import {FetchData} from './api';

export default class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount () {
        const fetchedData = await FetchData();

        this.setState({
            data: fetchedData
        });

    }



    render() {

      
        return(
            <div className={styles.container}>
             <Cards data={this.state.data}/>
             <CountryPicker />
             <Chart />
            </div>
        )
    }
}