import React, { useContext, useEffect, useState } from 'react';
import TicketsContext from '../../context/Tickets/ticketsContext';
// import AuthContext from '../../context/AuthContexts/authContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TicketForm = (props) => {
  const searchTBContext = useContext(TicketsContext);
  // const authContext = useContext(AuthContext);
  // const { isAuthenticated, token } = authContext;
  const { searchTicket, loading, error, tickets, clearError } = searchTBContext;
  const [selectDate, setSelectDate] = useState('manta');
  useEffect(() => {
    if (error) {
      clearError();
      toast.error('😈😈  Not Found Your Search    Please Try Again');
      props.history.push('/');
    }

    if (loading === false && tickets !== null) {
      props.history.push('/searchResult'); //redircated to search result
    }
    // else if (token && isAuthenticated) {
    //   toast.success('👏👏👏👏 user are  Login');

    //   props.history.push('/');
    // }
    else {
      props.history.push('/');
    }

    //eslint-disable-next-line
  }, [loading, error, props.history]);
  const [ticket, setTicket] = useState({
    currentPlace: '',
    destination: '',
    data: '',
  });
  const { currentPlace, destination } = ticket;

  const onChange = (e) =>
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    if (currentPlace === '' || destination === '') {
      toast.error('😈😈 empty field not allow');
    } else {
      searchTicket({
        currentPlace,
        destination,
        selectDate,
      });
    }
    e.target.reset();
  };
  return (
    <div className='container  py-24 mx-auto justify-center  w-full lg:max-w-full lg:flex   '>
      <section className='text-gray-500 bg-gray-800 body-font rounded overflow-hidden shadow-lg'>
        <div className='container pr-56 sm:pl-3 m:pl-3 py-24 mx-auto'>
          <ToastContainer />
          <div className='flex flex-col text-center justify-items-auto w-full mb-12'>
            <h1 className='text-3xl sm:text-3xl  justify-center items-center font-medium title-font mb-4  text-white'>
              Search Bus for Your Next Journey
            </h1>
          </div>
          <form onSubmit={onSubmit}>
            <div className='flex lg:w-2/3  -m-1 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 '>
              <input
                className='flex-grow  bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0'
                placeholder='Current Place'
                name='currentPlace'
                type='text'
                onChange={onChange}
              />
              <input
                className='flex-grow  bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0'
                placeholder='Destination'
                name='destination'
                type='text'
                onChange={onChange}
              />{' '}
              <select
                onChange={(e) => setSelectDate(e.target.value)}
                className='flex-grow  bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0'>
                <option defaultValue value='manta'>
                  Manta
                </option>
                <option value='bari'>Bari</option>
              </select>
              <button className='text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600  text-lg rounded-full'>
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TicketForm;
