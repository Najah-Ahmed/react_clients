import React, { useContext } from 'react';

import './Seat.css';
import TicketsContext from './TicketContext';
const Seat = (props) => {
  // const { movies } = useContext(MovieContext);
  // const context = useContext(MovieContext);
  const ticketContext = useContext(TicketsContext);
  const { sticket } = ticketContext;

  const seatNumber = props.seatno;
  const seatStatus = props.seatColor ? props.seatColor : 'seat-grey';

  const seatClickHandler = (event, seatNumber) => {
    event.stopPropagation();
    const seatColor = document.querySelector(`.seat-${seatNumber}`).classList;

    // console.log(ticket.seatNumbers);
    // console.log(seatColor);
    if (sticket.seatNumbers.includes(seatNumber)) {
      const newTicketSeats = sticket.seatNumbers.filter((seat) => {
        return seat !== seatNumber;
      });
      seatColor.remove('seat-black');
      seatColor.add('seat-grey');
      ticketContext.changeState({
        ...sticket,
        seatNumbers: newTicketSeats,
        totalSeats: sticket.totalSeats - 1,
      });
    } else {
      seatColor.remove('seat-grey');
      seatColor.add('seat-black');
      ticketContext.changeState({
        ...sticket,
        seatNumbers: [...sticket.seatNumbers, seatNumber],
        totalSeats: sticket.totalSeats + 1,
      });
    }
    // console.log(seatNumber);
  };

  return (
    <div className='col-2 col-md-2'>
      <div
        className={`seat seat-${seatNumber} ${seatStatus}`}
        onClick={(e) => seatClickHandler(e, props.seatno)}
      />
    </div>
  );
};

export default Seat;
export const SeatListSelected = () => {
  return <div className='seat'></div>;
};
export const SeatListNull = () => {
  return <div className='unSeatSelected'></div>;
};

export const SeatListOccupied = () => {
  return <div className='seatOccupied'></div>;
};
