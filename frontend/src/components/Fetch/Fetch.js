import React, { useState, useEffect } from 'react';

function Fetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL from which you want to fetch JSON data
    // const url = 'https://example.com/api/data.json';

    // Use the fetch API to make the request
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Use the data constant here or perform any actions with the data

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Fetch;
