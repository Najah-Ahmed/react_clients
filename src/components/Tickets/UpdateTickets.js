import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContexts/authContext';
import TicketsContext from '../../context/Tickets/ticketsContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateTickets = (props) => {
  const userContext = useContext(AuthContext);
  const ticketContext = useContext(TicketsContext);
  const id = props.match.params.id;

  const { loadUser, isAdmin } = userContext;
  const { updateTicket, getSingleTicket, ticket } = ticketContext;

  const [updateTickets, setUpdateTickets] = useState({
    arriced_place: '',
    destination_place: '',
    bus_id: '',
    bus_no_seat: '',
    price_per_seat: '',
    time_of_journery: '',
    time_of_arrived: '',
    date_of_day: '',
  });

  useEffect(() => {
    loadUser();
    getSingleTicket(id);

    // createTickets(id);

    // eslint-disable-next-line
  }, []);

  const {
    arriced_place,
    destination_place,
    bus_id,
    bus_no_seat,
    price_per_seat,
    time_of_journery,
    time_of_arrived,
    date_of_day,
  } = ticket;
  const onChange = (e) =>
    setUpdateTickets({
      ...updateTickets,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (arriced_place === '' || destination_place === '' || bus_id === '') {
      toast.error('😈😈 empty field not allow');
    } else if (isAdmin !== true) {
      toast.error('😈😈 You Are Not Admin');
    }
    updateTicket({
      // arriced_place,
      // destination_place,
      // bus_id,
      // bus_no_seat,
      // price_per_seat,
      // time_of_journery,
      // time_of_arrived,
      // date_of_day,
      id,
    });
    console.log(setUpdateTickets);

    toast.success('👏👏👏👏 User update');
    props.history.push('/allTickets');
    e.target.reset();
  };

  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <div className='container px-5 py-16 mx-auto'>
        <form onSubmit={onSubmit}>
          <div className='flex flex-col text-center w-full mb-12'>
            <ToastContainer />
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              Update Ticket
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>Admin </p>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Arrived Place'
                  name='arriced_place'
                  type='text'
                  value={arriced_place}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='destination'
                  type='text'
                  name='destination_place'
                  value={destination_place}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Bus Id'
                  type='text'
                  name='bus_id'
                  value={bus_id}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Bus Number Seats'
                  type='text'
                  name='bus_no_seat'
                  value={bus_no_seat}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='price per seat'
                  type='text'
                  name='price_per_seat'
                  value={price_per_seat}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Time of Journey'
                  type='text'
                  name='time_of_journery'
                  value={time_of_journery}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Time of Arrived'
                  type='text'
                  name='time_of_arrived'
                  value={time_of_arrived}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='date_of_day'
                  type='text'
                  name='date_of_day'
                  value={date_of_day}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-full'>
                <input
                  className='w-full  rounded  border-gray-700 justify-center
                  focus:border-indigo-500 text-base px-4 py-2 
                flex mx-auto text-white bg-indigo-500 border-0  focus:outline-none hover:bg-indigo-600 hover:rounded hover:text-lg'
                  value={'Update Ticket'}
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

export default UpdateTickets;
