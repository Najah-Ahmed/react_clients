import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContexts/authContext';
import TicketsContext from '../../context/Tickets/ticketsContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTickets = (props) => {
  const userContext = useContext(AuthContext);
  const ticketContext = useContext(TicketsContext);

  const { loadUser, isAdmin } = userContext;
  const { createTickets, current } = ticketContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const [ticket, setTicket] = useState({
    arrivedPlace: '',
    destination: '',
    busId: '',
    busSeats: '',
    pricePerSeat: '',
    timeJournery: '',
    timeOfArrived: '',
    wakhtiga: '',
  });
  const {
    arrivedPlace,
    destination,
    busId,
    busSeats,
    pricePerSeat,
    timeJournery,
    timeOfArrived,
    wakhtiga,
  } = ticket;
  const onChange = (e) =>
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    if (arrivedPlace === '' || destination === '' || busId === '') {
      toast.error('😈😈 empty field not allow');
    } else if (isAdmin !== true) {
      toast.error('😈😈 You Are Not Admin');
    } else if (current === null) {
      createTickets({
        arrivedPlace,
        destination,
        busId,
        busSeats,
        pricePerSeat,
        timeJournery,
        timeOfArrived,
        wakhtiga,
      });
      toast.success('👏👏👏👏 User created Ticket');
      props.history.push('/allTickets');
      e.target.reset();
    }
  };

  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <div className='container px-5 py-16 mx-auto'>
        <form onSubmit={onSubmit}>
          <div className='flex flex-col text-center w-full mb-12'>
            <ToastContainer />
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              Create Ticket
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>Admin </p>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Arrived Place'
                  name='arrivedPlace'
                  type='text'
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='destination'
                  type='text'
                  name='destination'
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Bus Id'
                  type='text'
                  name='busId'
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Bus Number Seats'
                  type='text'
                  name='busSeats'
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='price per seat'
                  type='text'
                  name='pricePerSeat'
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Time of Journey'
                  type='text'
                  name='timeJournery'
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Time of Arrived'
                  type='text'
                  name='timeOfArrived'
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='wakhtiga'
                  type='text'
                  name='wakhtiga'
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-full'>
                <input
                  className='w-full  rounded  border-gray-700 justify-center
                  focus:border-indigo-500 text-base px-4 py-2 
                flex mx-auto text-white bg-indigo-500 border-0  focus:outline-none hover:bg-indigo-600 hover:rounded hover:text-lg'
                  value={'Add Ticket'}
                  type='submit'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTickets;
