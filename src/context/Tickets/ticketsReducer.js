import {
  CLEAR_ERROR,
  GET_TICKETS,
  GET_SINGLE_TICKET,
  ADD_TICKETS,
  DELETE_TICKETS,
  SEARCH_TICKETS,
  UPDATE_TICKETS,
  TICKET_ERROR,
  SEARCH_TICKET_ERROR,
  CLEAR_CURRENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload.data,
        loading: false,
        error: null,
        current: null,
      };
    case SEARCH_TICKETS:
      return {
        ...state,
        tickets: action.payload.data,
        loading: false,
        error: null,
      };
    case ADD_TICKETS:
      return {
        ...state,
        alert: [action.payload, ...state.tickets],
        loading: false,
        current: null,
      };
    case DELETE_TICKETS:
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id !== action.payload),

        loading: false,
        alert: action.payload.data,
        error: null,
      };
    case UPDATE_TICKETS:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        loading: false,
      };
    case GET_SINGLE_TICKET:
      return {
        ...state,
        ticket: action.payload,
        loading: false,
        totalSeats: 0,
        seatNumbers: [],
        priceSeat: action.payload.price_per_seat,
      };

    case SEARCH_TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
        alert: action.payload,
      };

    case TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
        alert: action.payload,
        current: null,
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
