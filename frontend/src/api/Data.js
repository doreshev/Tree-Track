import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
    const [data, setData] = useState(null);
    const city = '13.4050,52.5200';
    const baseurl = 'https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?interval=day&begin=2019-02-01&end=2019-02-02&point=';

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async () => {
        try {
            const response = await axios.get(baseurl + city);
            const allData = response.data[0];
            console.log(allData);
            setData(allData);
        }
        catch(error) {
            console.error('Error: ', error);
        }
    }

    return (
        <div>
            <h1>My Data</h1>
            {data && (
                <div>
                  <p>Average: {data.value.average}</p>
                  <p>Count: {data.value.count}</p>
                </div>
            )}
        </div>
    );
}

export default Data;