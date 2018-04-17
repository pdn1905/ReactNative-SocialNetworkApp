import { FETCH_POST_FAILED, FETCH_POST_SUCCESS, START_FETCH_POST } from '../actions/typeActions';

const INITIAL_STATE = {
    posts: [],
    fetchPostError: null,
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return { ...state,posts: action.payload, isLoading: false, fetchPostError: null }
        case FETCH_POST_FAILED:
            return { ...state,error: action.payload, isLoading: false }
        case START_FETCH_POST:
            return { ...state,isLoading: true }
        default:
            return state
    }
}