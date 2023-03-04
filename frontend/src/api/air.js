import React, { useEffect, useState } from "react";

// const URL = "https://httpbin.org/get"

function Data() {

    // const URL = 'https://www.umweltbundesamt.de/api/air_data/v2/component/json'
    const URL = "https://httpbin.org/get"
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(
                      `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let result = await response.json();
                console.log(result);
                setData(result);
            } 
            catch(err) {
                setData(null);
            }
        };
        getData();
    }, []);

    return (
        <div className="Data">
          <h1>API Posts</h1>
          <ul>
            {data &&
              data.map(({ origin, url }) => (
                <li key={origin}>
                  <h3>{url}</h3>
                </li>
              ))}
          </ul>
        </div>
      );
}

export default Data;