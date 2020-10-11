import React, { useReducer } from 'react';
import axios from 'axios';
import PaymentContext from './paymentContext';
import PaymentReducer from './paymentReducer';
import {
  GET_PAYMENT,
  ADD_PAYMENT,
  PAYMENT_ERROR,
  CLEAR_ERROR,
  CLEAR_CURRENT,
  GET_PAYMENT_SINGLE,
} from '../types';
const Authtoken = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Authtoken}`,
  },
};
const initialState = {
  payments: [],
  loading: true,
  error: null,
  current: null,
  alert: null,
};
export const PaymentState = ({ children }) => {
  const [state, dispatch] = useReducer(PaymentReducer, initialState);

  const paymentPackage = async (formDate, id) => {
    try {
      const res = await axios.post(`packagepayment/${id}`, formDate, config);
      dispatch({
        type: ADD_PAYMENT,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: PAYMENT_ERROR,
        payload: err.response.status,
      });
    }
  };
  const paymentBooking = async (formDate, id) => {
    try {
      const res = await axios.post(`bookingpayment/${id}`, formDate, config);
      dispatch({
        type: ADD_PAYMENT,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: PAYMENT_ERROR,
        payload: err.response.status,
      });
    }
  };
  //single ticket

  const getAdminUserPayment = async () => {
    try {
      const res = await axios.get(`/payments`, config);
      dispatch({
        type: GET_PAYMENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PAYMENT_ERROR,
        payload: err.response.status,
      });
    }
  };
  const getUserPayment = async () => {
    try {
      const res = await axios.get(`/payment`, config);
      dispatch({
        type: GET_PAYMENT_SINGLE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PAYMENT_ERROR,
        payload: err.response.status,
      });
    }
  };
  //* CLEAR contacts
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  const clearState = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  return (
    <PaymentContext.Provider
      value={{
        payments: state.payments,
        loading: state.loading,
        error: state.error,
        alert: state.alert,
        current: state.current,
        paymentBooking,
        paymentPackage,
        getAdminUserPayment,
        getUserPayment,
        clearError,
        clearState,
      }}>
      {children}
    </PaymentContext.Provider>
  );
};
