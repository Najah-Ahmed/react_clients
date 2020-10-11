import { CLEAR_ERROR, GET_TICKETS, TICKET_ERROR } from '../types';

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

    default:
      return state;
  }
};
