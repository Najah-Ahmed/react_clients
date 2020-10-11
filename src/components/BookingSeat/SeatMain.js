import React, { useState } from 'react';
import TicketContext from './TicketContext';
import Main from './Main';
const App = () => {
  const [sticket, EditTicket] = useState({
    priceSeat: 0,
    totalSeats: 0,
    seatNumbers: [],
  });

  localStorage.setItem('data', JSON.stringify(sticket.seatNumbers));
  localStorage.setItem('data2', JSON.stringify(sticket.totalSeats));

  return (
    <div className=''>
      <TicketContext.Provider value={{ sticket, changeState: EditTicket }}>
        <Main />
      </TicketContext.Provider>
    </div>
  );
};

export default App;
