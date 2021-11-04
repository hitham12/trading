import React from 'react';
import axios from 'axios';
import DataDate from './DataDate';

const Main = () => {
    const [resultsCount, setResultsCount] = React.useState([]);
    const [inputDate, setInputDate] = React.useState('2021-10-29');

    React.useEffect(() => {
        getDataTrading();
    }, [inputDate])
    const getDataTrading = async () => { 
        const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${inputDate}?adjusted=true&apiKey=KpVVztJXnIch5GvwOuhunIYdpzay4zUe`)
        console.log(response.data.results,"res");
        setResultsCount(response.data.results)
    }
    const dateInput = (e) => {
        console.log(e.target.value,'date');
        setInputDate(e.target.value)
    }
    return (<>
        <div>
             {
                resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
            }
            {
           /*       <Chart /> */
            }
     </div></>
    )
}
export default Main