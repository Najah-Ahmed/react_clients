import React from 'react';
import Seat from './Seat';
import './Seat.css';

const GenerateSeats = (seatNumbers) => {
  return (
    <div className='row'>
      {seatNumbers.map((seatNumber) => {
        return <Seat seatno={seatNumber} key={seatNumber} />;
      })}
    </div>
  );
};

const SeatMatrix = () => {
  return (
    <div className='ml-64 pt-2 pb-8' style={{ marginLeft: '120px' }}>
      <div className='container row movie-layout'>
        <div className='movie-column-1'>
          {GenerateSeats([1, 2, 3, 4])}
          {GenerateSeats([5, 6, 7, 8])}
          {GenerateSeats([9, 10, 11, 12])}
          {GenerateSeats([13, 14, 15, 16])}
          {GenerateSeats([17, 18, 19, 20])}
          {GenerateSeats([21, 22, 23, 24])}
          {GenerateSeats([25, 26, 27, 28])}
          {GenerateSeats([31, 32, 33, 34])}
          {GenerateSeats([35, 36, 37, 38])}
          {GenerateSeats([39, 40, 41, 42])}
          {GenerateSeats([43, 44, 45, 46])}
          {GenerateSeats([47, 48, 49, 50])}
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;
