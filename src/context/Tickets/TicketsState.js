import React, { useReducer } from 'react';
import axios from 'axios';
import TicketsContext from './ticketsContext';
import TicketsReducer from './ticketsReducer';
import {
  GET_TICKETS,
  GET_SINGLE_TICKET,
  ADD_TICKETS,
  DELETE_TICKETS,
  SEARCH_TICKETS,
  UPDATE_TICKETS,
  TICKET_ERROR,
  SEARCH_TICKET_ERROR,
  CLEAR_ERROR,
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
  tickets: [],
  ticket: {},
  loading: true,
  error: null,
  current: null,
  alert: null,
  totalSeats: 0,
  seatNumbers: [],
  priceSeat: 0,
};
export const TicketsState = ({ children }) => {
  const [state, dispatch] = useReducer(TicketsReducer, initialState);
  //get tickets
  const getTickets = async () => {
    try {
      const res = await axios.get('/tickets');
      dispatch({
        type: GET_TICKETS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  const createTickets = async (formDate) => {
    try {
      const res = await axios.post('/tickets', formDate, config);
      dispatch({
        type: ADD_TICKETS,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  //single ticket
  const getSingleTicket = async (id) => {
    try {
      const res = await axios.get(`/ticket/${id}`);
      dispatch({
        type: GET_SINGLE_TICKET,
        payload: res.data.result,
      });
    } catch (err) {
      dispatch({
        type: TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  const updateTicket = async (ticket) => {
    try {
      const res = await axios.put(`/ticket/${ticket.id}`, config);
      dispatch({
        type: UPDATE_TICKETS,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  const deleteTicket = async (id) => {
    try {
      const res = await axios.delete(`/ticket/${id}`, config);
      dispatch({
        type: DELETE_TICKETS,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: TICKET_ERROR,
        payload: err.response.data,
      });
    }
  };

  const searchTicket = async (data) => {
    try {
      const res = await axios.get(
        `/bookings/?arrived=${data.currentPlace}&destination=${data.destination}&date=${data.selectDate}`
      );
      dispatch({
        type: SEARCH_TICKETS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_TICKET_ERROR,
        payload: error.response,
      });
    }
  };
  // const bookingTicket = async (ticket) => {
  //   try {
  //     const res = await axios.post(`/bookings`, ticket, config);
  //     dispatch({
  //       type: BOOKING_TICKET,
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: BOOKING_TICKET_ERROR,
  //       payload: err.response.status,
  //     });
  //   }
  // };
  // const cancelTicket = async (id) => {
  //   try {
  //     const res = await axios.put(`/bookings${id}`, config);
  //     dispatch({
  //       type: CANCEL_TICKET,
  //       payload: res.data.message,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: TICKET_ERROR,
  //       payload: err.response.status,
  //     });
  //   }
  // };
  // const clearError = () => dispatch({ type: CLEAR_ERROR });
  //* CLEAR contacts
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  const clearState = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  return (
    <TicketsContext.Provider
      value={{
        totalSeats: state.totalSeats,
        seatNumbers: state.seatNumbers,
        priceSeat: state.priceSeat,
        tickets: state.tickets,
        ticket: state.ticket,
        loading: state.loading,
        error: state.error,
        alert: state.alert,
        current: state.current,
        getTickets,
        searchTicket,
        getSingleTicket,
        createTickets,
        updateTicket,
        deleteTicket,
        clearError,
        clearState,
      }}>
      {children}
    </TicketsContext.Provider>
  );
};
