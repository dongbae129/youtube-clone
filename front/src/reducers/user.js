const initialState = {
  loginsuccess: true,
  me: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLogging: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        me: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loginErrorReason: action.error,
      };

    default:
      return state;
  }
};
