import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SELECTED_PROFILE_IMAGE,
  USERNAME_CHANGED,
  USER_LOGGIN_SUCCESS,
  USER_LOGGIN_FAILED,
  LOGGIN_PROCESSING
} from "../actions/typeActions";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  isLogginSuccess: false,
  imageData: null,
  loginError: null,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action, "ACTION NOW");
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, loginError: null };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, loginError: null };
    case SELECTED_PROFILE_IMAGE:
      return { ...state, imageData: action.payload, loginError: null };
    case USERNAME_CHANGED:
      return { ...state, username: action.payload, loginError: null };
    case USER_LOGGIN_SUCCESS:
        return {...state, loginError: null ,isLogginSuccess: true, isLoading: false }
    case USER_LOGGIN_FAILED:
        return {...state,loginError: action.payload, isLoading: false }
        // return {...state, loginError: null ,isLogginSuccess: true, isLoading: true }
    case LOGGIN_PROCESSING:
        return {...state,isLoading: true, loginError: null}
    default:
      return state;
  }
};
