import { EMAIL_CHANGED, PASSWORD_CHANGED, SELECTED_IMAGE } from '../actions/typeActions';

const INITIAL_STATE = { email: '', password: '', imageData: null }

export default (state = INITIAL_STATE, action) => { 
    console.log(action,'ACTION NOW');
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload }
        case PASSWORD_CHANGED:
            return {...state, password: action.payload }
        case SELECTED_IMAGE:
            return {...state,imageData: action.payload }
        default: 
            return state
    }
}