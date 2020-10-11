import React, { useContext, useEffect } from 'react';
import TicketsContext from '../../context/Tickets/ticketsContext';
import TicketsList from './TicketsList';
const SearchResult = (props) => {
  const bTContext = useContext(TicketsContext);
  const { searchTicket, tickets, loading, error } = bTContext;
  useEffect(() => {
    if (loading === true && error === null) {
      props.history.push('/');
    } else {
      searchTicket();
    }

    // eslint-disable-next-line
  }, [loading, error]);

  return (
    <div className=''>
      <h1 className='text-white  text-4xl justify-center align-middle'>
        Available Tickets
      </h1>
      {tickets.map((ticket) => (
        <TicketsList key={ticket.id} booking={ticket} />
      ))}
      {tickets.id}
    </div>
  );
};

export default SearchResult;
