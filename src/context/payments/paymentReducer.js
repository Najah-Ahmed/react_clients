import {
  GET_PAYMENT,
  ADD_PAYMENT,
  PAYMENT_ERROR,
  CLEAR_ERROR,
  CLEAR_CURRENT,
  GET_PAYMENT_SINGLE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PAYMENT:
      return {
        ...state,
        payments: action.payload.data,
        loading: false,
        error: null,
      };
    case GET_PAYMENT_SINGLE:
      return {
        ...state,
        payments: action.payload.result,
        loading: false,
        error: null,
      };
    case ADD_PAYMENT:
      return {
        ...state,
        payments: [action.payload, ...state.Payments],
        loading: false,
        error: null,
      };

    case PAYMENT_ERROR:
      return {
        ...state,
        error: action.payload,
        alert: action.payload,
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
        payments: [],

        loading: true,
        error: null,
        current: null,
        alert: null,
      };
    default:
      return state;
  }
};
