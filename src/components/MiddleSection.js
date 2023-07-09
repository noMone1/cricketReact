import React from 'react'
import Bet1 from './Bet1'
import Bet2 from './Bet2'
import Bet3 from './Bet3'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { useState } from 'react';
import Spinner from '../components/Spinner/Spinner'

import { useLocation } from 'react-router-dom';
const MiddleSection = () => {
  const [section1Data, setSection1Data] = useState([])
  const [datafetched, setDataFetched] = useState(false)
  const [market, setMarket] = useState({})
  const { id } = useParams();
  const location = useLocation();
  const  item  = location.state;
  console.log("==========",item)
  useEffect(() => {
    // fetch(`http://127.0.0.1:3200/market/${id}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

      const socket = io('http://localhost:3200');
      socket.emit('init', {id:id});
    
      socket.on(`matchOdds${id}`,(data)=>{
        setDataFetched(true)
        setSection1Data(data)
        // console.log(data)
      })
      
    },[])
    
  return (
    <>
      {datafetched && <Bet1 section1Data={section1Data} market ={item}/>}
      {!datafetched && <Spinner/>}
        {/* <Bet1 section1Data={section1Data} market ={item}/> */}
        {/* <br/>
        <Bet2/>
        <br/>
        <Bet3/> */}
        </>
  )
}

export default MiddleSection