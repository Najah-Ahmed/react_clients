import React, { useReducer } from 'react';
import axios from 'axios';
import BookingContext from './bookingContext';
import BookingReducer from './bookingReducer';
import {
  BOOKING_TICKET,
  BOOKING_TICKET_ERROR,
  CLEAR_ERROR,
  // CANCEL_TICKET,
  CLEAR_CURRENT,
} from '../types';
const Authtoken = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Authtoken}`,
  },
};
const initialState = {
  bookings: [],
  booking: {},
  loading: true,
  error: null,
  current: null,
  alert: null,
};
export const BookingState = ({ children }) => {
  const [state, dispatch] = useReducer(BookingReducer, initialState);

  const bookingTicket = async (id, data) => {
    // const datajson = {
    //   seat_no: data.seat_no,
    //   counterSeat: data.counterSeat,
    // };
    // data=localStorage.getItem('data'), data2=localStorage.getItem('data2');

    try {
      const res = await axios.post(`/bookingticket/${id}`, data, config);

      dispatch({
        type: BOOKING_TICKET,
        payload: res.data,
      });
      console.log(id, data);
    } catch (err) {
      dispatch({
        type: BOOKING_TICKET_ERROR,
        payload: err.response,
      });
      console.log(err);
    }
  };
  // const cancelTicket = async (id) => {
  //   try {
  //     const res = await axios.put(`/bookings${id}`, config);
  //     dispatch({
  //       type: CANCEL_TICKET,
  //       payload: res.data.message,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: BOOKING_TICKET_ERROR,
  //       payload: err.response.status,
  //     });
  //   }
  // };
  //* CLEAR contacts
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  const clearState = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  return (
    <BookingContext.Provider
      value={{
        tickets: state.tickets,
        ticket: state.ticket,
        loading: state.loading,
        error: state.error,
        alert: state.alert,
        current: state.current,
        bookingTicket,
        clearError,
        clearState,
      }}>
      {children}
    </BookingContext.Provider>
  );
};
