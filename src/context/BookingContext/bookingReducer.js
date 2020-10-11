import {
  BOOKING_TICKET,
  BOOKING_TICKET_ERROR,
  CLEAR_ERROR,
  CLEAR_CURRENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case BOOKING_TICKET:
      return {
        bookings: [],
        booking: {},
        loading: true,
        error: null,
        current: null,
        alert: null,
      };
    case BOOKING_TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        loading: true,
        error: null,
        current: null,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        tickets: [],
        ticket: {},
        loading: true,
        error: null,
        current: null,
        alert: null,
      };
    default:
      return state;
  }
};
