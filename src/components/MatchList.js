import React from 'react';
import Carousel from './Carausal/Carausal';
import Listing from './Listing/Listing';

const MatchList = () => {
  return (
    <>
       <div style={{ position: 'relative', zIndex: 0 }}>
        <Carousel />
      </div>

      <div >
        <Listing />
      </div>
    
      </>
  );
};

export default MatchList;
