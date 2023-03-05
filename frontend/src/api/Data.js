import React, { useEffect, useState } from "react";
import axios from "axios";

function Data(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async () => {
        try {
            const response = await axios.get(url);
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