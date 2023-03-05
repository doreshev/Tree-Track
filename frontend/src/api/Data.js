import React, { useEffect, useState } from "react";
import axios from "axios";
import {createChart} from "./EmissionChart";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


function Data() {
    const [data, setData] = useState(null);
    const location = '9.178666764773801,49.11866136687143'
    const baseurl = 
    'https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?interval=day&begin=2022-01-01&end=2022-07-30&point=';
  

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async () => {
        try {
            const response = await axios.get(baseurl + location);
            const allData = response.data;
            setData(allData);
        }
        catch(error) {
            console.error('Error: ', error);
        }
    }

    return (
        <div>
            <div>
                <h1>My Data</h1>
                {data && <Chart type='bar' data={createChart(data)} />}
            </div>
            <div>
                
            </div>
        </div>

    );
}

export default Data;