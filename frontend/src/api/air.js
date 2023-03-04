import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
    const [data, getData] = useState([]);
    const city = '13.4050,52.5200';
    const baseurl = 'https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?interval=day&begin=2019-02-01&end=2019-02-02&point=';


    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        axios.get(baseurl + city)
        .then((response) => {
            const allData = response.data[0].value;
            getData(allData);
        })
        .catch(error => console.error('Error: ', error));
    }
    return (
        <div>
            <h1>My Data</h1>
            <p>Average: {data.average}</p>
            <p>Count: {data.count}</p>
        </div>
    );
}

export default Data;