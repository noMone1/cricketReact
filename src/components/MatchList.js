import React from 'react';
import Carousel from './Carausal/Carausal';
import Listing from './Listing/Listing';

const MatchList = () => {
  return (
    <div>
      <div className="p-0">
        <Carousel />
      </div>
      <div>
        <Listing />
      </div>
    </div>
  );
};

export default MatchList;
