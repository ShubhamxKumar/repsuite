import { AUTH_ERROR, CLEAR_ERR, LOGIN, LOGOUT, SET_LOADING } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("auth");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    }
    case LOGIN: {
      localStorage.setItem("auth", true);
      return {
        ...state,
        error: null,
        isAuthenticated: true,
        loading: false,
      };
    }
    case CLEAR_ERR: {
      return {
        ...state,
        error: null,
        loading: false,
      };
    }
    case AUTH_ERROR: {
      localStorage.removeItem("auth");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
