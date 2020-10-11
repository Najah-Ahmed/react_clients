import React, { useContext, useEffect } from 'react';
import TicketsContext from '../../context/Tickets/ticketsContext';
import TicketsList from './TicketsList';
import AuthContext from '../../context/AuthContexts/authContext';
const GelAllTicket = () => {
  const bTContext = useContext(TicketsContext);
  const authContext = useContext(AuthContext);
  const { getTickets, tickets } = bTContext;
  const { loadUser } = authContext;
  useEffect(() => {
    getTickets();
    loadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=''>
      <h1 className='text-white  text-4xl pl-40'>Available Tickets</h1>
      {tickets.map((ticket) => (
        <TicketsList key={ticket.id} booking={ticket} />
      ))}
      {tickets.id}
    </div>
  );
};

export default GelAllTicket;
