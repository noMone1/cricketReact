import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import Spinner from '../components/Spinner/Spinner';
import Bet1 from './Bet1';

const MiddleSection = () => {
  const [section1Data, setSection1Data] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const item = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.249.123:3200/market/${id}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const socket = io('http://192.168.249.123:3200');
    socket.emit('init', { id: id });

    const handleMatchOddsData = (data) => {
      console.log(data);
      setDataFetched(true);
      setSection1Data(data);
    };

    const handleDisconnect = () => {
      console.log('Socket disconnected');
      socket.disconnect();
    };

    socket.on(`matchOdds${id}`, handleMatchOddsData);
    socket.on('disconnect', handleDisconnect);

    return () => {
      socket.off(`matchOdds${id}`, handleMatchOddsData);
      socket.off('disconnect', handleDisconnect);
      socket.disconnect();
    };
  }, [id]);

  return (
    <>
      {dataFetched ? <Bet1 section1Data={section1Data} market={item} /> : <Spinner />}
    </>
  );
};

export default MiddleSection;
