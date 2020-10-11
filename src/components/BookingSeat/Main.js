import React from 'react';
import { SeatListSelected, SeatListOccupied, SeatListNull } from './Seat';

import SeatMatrix35 from './SeatMatrix35';
import PriceCalculator from './PriceCalculator';

const Main = () => {
  return (
    <div>
      <h2 className='title-font font-medium text-white tracking-widest text-4xl mb-2'>
        Select Booking Seat
      </h2>
      <ul
        className='mr-12 pt-4 flex showcase  '
        style={{
          borderRadius: '5px',
          listStyle: 'none',
        }}>
        <li>
          <SeatListNull />
          <small className='text-white'>N/A</small>
        </li>
        <li>
          <SeatListSelected />
          <small className='text-white'>Selected</small>
        </li>
        <li>
          <SeatListOccupied />
          <small className='text-white'>Occupied</small>
        </li>
      </ul>
      <div className='inline-flex'>
        <SeatMatrix35 />
      </div>
      <PriceCalculator />
    </div>
  );
};

export default Main;
