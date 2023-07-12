import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import Spinner from '../components/Spinner/Spinner';
import Bet1 from './Bet1';
import Bet2 from './Bet2'
import Bet3 from './Bet3'
import Footer from './Footer/Footer';

const MiddleSection = () => {
  const [section1Data, setSection1Data] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [section2Data, setSection2Data] = useState([]);
  const [dataFetched2, setDataFetched2] = useState(false);
  const [section3Data, setSection3Data] = useState([]);
  const [dataFetched3, setDataFetched3] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const item = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cricketbackend.onrender.com/market/${id}`);
        const data = await response.json();
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const socket = io('https://cricketbackend.onrender.com/');
    socket.emit('init', { id: id });

    const handleMatchOddsData = (data) => {
      // console.log(data);
      setDataFetched(true);
      setSection1Data(data);
    };
    const handleMatchBookmarkerData = (data) => {
      // console.log(data);
      setDataFetched2(true);
      setSection2Data(data);
    };
    const handleSessionData = (data) => {
      // console.log(data);
      setDataFetched3(true);
      setSection3Data(data);
    };

    const handleDisconnect = () => {
      // console.log('Socket disconnected');
      socket.disconnect();
    };

    socket.on(`matchOdds${id}`, handleMatchOddsData);
    socket.on(`bookmaker${id}`, handleMatchBookmarkerData);
    socket.on(`session${id}`, handleSessionData);
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
      {dataFetched2 ? <Bet2 section2Data={section2Data} market={item} /> : <Spinner />}
      {/* {dataFetched ? <Bet3 section1Data={section3Data} market={item} /> : <Spinner />} */}
      <Footer/>
    </>
  );
};

export default MiddleSection;
