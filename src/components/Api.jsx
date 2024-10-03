import { useEffect } from 'react';
import { useState } from 'react';

const Api = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost/bioflex/backend/API/api.php?catid=12')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);
  // console.log('Data in data state', data);
  return (
    <div>
      <h1>Data from PHP API</h1>
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>{item.product_name}</li>
        ))} */}
      </ul>
    </div>
  );
};
export default Api;
