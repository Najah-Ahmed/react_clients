import React, { useReducer } from 'react';
import SeatContext from './seatContext';
import seatReducer from './seatReducer';
import { CLEAR_ERROR } from '../types';

const initialState = {
  totalSeats: 0,
  seatNumbers: [],
  priceSeat: 0,
  error: null,
};
export const SeatState = ({ children }) => {
  const [state, dispatch] = useReducer(seatReducer, initialState);
  //get tickets

  //* CLEAR contacts
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <SeatContext.Provider
      value={{
        totalSeats: state.totalSeats,
        seatNumbers: state.seatNumbers,
        priceSeat: state.priceSeat,
        error: state.error,

        clearError,
      }}>
      {children}
    </SeatContext.Provider>
  );
};
