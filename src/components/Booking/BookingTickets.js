import React, { useContext, useEffect } from 'react';
import SeatMain from '../BookingSeat/SeatMain';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketsContext from '../../context/Tickets/ticketsContext';
// import BookingContext from '../../context/BookingContext/bookingContext';
const BookingTickets = (props) => {
  const bTContext = useContext(TicketsContext);
  const { ticket, getSingleTicket, alert, clearError } = bTContext;
  // const TBContext = useContext(BookingContext);
  // const { bookingTicket } = TBContext;

  const id = props.match.params.id;

  useEffect(() => {
    if (alert === 404) {
      // toast.error('😈😈  Not Found Booking.');
      clearError();
      props.history.push('/');
    } else getSingleTicket(id);
    // eslint-disable-next-line
  }, [alert]);

  // const [Tbookings, setTbookings] = useState({
  //   seat_no: '',
  //   counterSeat: 0,
  // });
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success('👏👏👏👏 User! You Make Ticket');
    props.history.push('/home');
    // console.log(id, seat_no, counterSeat);
    // bookingTicket(id, seat_no, counterSeat);
  };
  return (
    <section className='text-gray-500 body-font bg-gray-900'>
      <div className='container flex flex-wrap px-5 py-8 mx-auto items-center'>
        <div className='md:w-1/2  md:pr-4 md:py-8 md:border-r md:border-b-0  md:mb-0 mb-10 pb-10 border-b border-gray-800'>
          <ToastContainer />
          <SeatMain className='sm:text-3xl text-2xl font-medium title-font mb-2 text-white' />
        </div>
        <div className='flex flex-col md:w-1/2 md:pl-12'>
          <div className='border border-orange-600 p-6 rounded-lg bg-gray-800'>
            <h2 className='title-font font-medium text-white tracking-widest text-4xl mb-2'>
              BOOKINGS
            </h2>

            <nav className='flex flex-wrap list-none -mb-1'>
              <li className='lg:w-1/3 mb-1 w-1/2'>
                <a href='#!' className='hover:text-white'>
                  bus_no_seat=
                  {ticket.bus_no_seat}
                </a>
              </li>

              <li className='lg:w-1/3 mb-1 w-1/2'>
                <a href='#!' className='hover:text-white'>
                  price_per_seat = {ticket.price_per_seat}
                </a>
              </li>

              <li className='lg:w-1/3 mb-1 w-1/2 pl-6'>
                <a href='#!' className='hover:text-white'>
                  bus_id = {ticket.bus_id}
                </a>
              </li>
            </nav>
            <form className='pt-4' onSubmit={onSubmit}>
              <div className='pt-4'>
                const onChange = (e) =>
                <button className='flex-grow  bg-blue-500 border-0 hover:bg-blue-700 text-white focus:outline-none  text-base px-4 py-2 mr-4 mb-4 sm:mb-0'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTickets;
