import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const config = require('../../config/config');
const Listing = () => {
    const [data, setData] = useState([]);
    // const [market, setMarket] = useState('');
    const navigate = useNavigate();
    const date = new Date();
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedDate = new Date(dateString).toLocaleString('en-US', options);
        return formattedDate;
      };
    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('https://cricketbackend.onrender.com/matchList');
                const data = await response.json();
                setData(data); // Update the state with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleClick = (market,item) => {
        
        navigate('/match/'+market,{ state: item });
    };

    return (
        <div className="p-0">
            <ul className="list-group">
                <b>
                {data.map((item, index) => (
                    <li className="list-group-item" key={index} >
                        <div className="row align-items-center">
                            <div className="col-6" onClick={()=>{handleClick(item.MarketId,item)}}>
                                <a style={{ color: '#347aeb', fontSize: '16px' }}>{item.EventName}</a>
                            </div>
                            <div className="col-3">
                            {new Date(item.EventDate) > new Date() &&
                                <span style={{ color: '#000000', fontSize: '10px', fontWeight: "normal" }}> {formatDate(item.EventDate)}</span>}
                            {new Date(item.EventDate) <= new Date() &&
                                <span style={{ color: '#4dbd74', fontSize: '14px' }}> In-Play</span>}
                            </div>
                            <div className="col-3 text-end">
                                <span style={{ fontSize: '25px' }}>
                                    <i className="fa fa-thumb-tack" />
                                </span>
                            </div>
                        </div>
                    </li>
                    ))}
                </b>
            </ul>
        </div>
    );
};

export default Listing;
