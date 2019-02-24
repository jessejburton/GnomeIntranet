import { SET_CURRENT_USER, USER_LOADING } from '../actions/types';
import isEmpty from 'is-empty';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log('payload:', action.payload);
      const user = action.payload;
      return {
        ...state,
        isAuthenticated: !isEmpty(user),
        user: user
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
