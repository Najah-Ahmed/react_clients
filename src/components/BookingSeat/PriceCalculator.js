import React, { useContext } from 'react';
import TicketContext from './TicketContext';
import TicketsContext from '../../context/Tickets/ticketsContext';

const PriceCalculator = () => {
  const ticketContext = useContext(TicketContext);
  const TContext = useContext(TicketsContext);
  const { ticket } = TContext;
  // const ticketContext = useContext(TicketsContext);
  const { sticket } = ticketContext;
  // const {ticket.price_per_seat}
  return (
    <div>
      <p>
        Selected {sticket.totalSeats} seats and the total price is .slsh
        {sticket.totalSeats * ticket.price_per_seat}
      </p>
    </div>
  );
};

export default PriceCalculator;
