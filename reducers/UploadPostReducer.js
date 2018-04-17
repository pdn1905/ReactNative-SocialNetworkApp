import { SELECTED_POST_IMAGE, POST_CAPTION_CHANGED, START_UPLOAD_POST, UPLOAD_POST_FAILED, UPLOAD_POST_SUCCESS } from '../actions/typeActions';

const INITIAL_STATE = {
    caption: '',
    imageData: null,
    isLoading: false,
    isUploadSuccess: false
  };

export default (state = INITIAL_STATE, action) => {
    console.log(action, "ACTION NOW");
    switch (action.type) {
        case SELECTED_POST_IMAGE:
            return {...state, imageData: action.payload }
        case POST_CAPTION_CHANGED:
            return {...state, caption: action.payload }
        case START_UPLOAD_POST:
            return {...state, isLoading: true, isUploadSuccess: false}
        case UPLOAD_POST_FAILED:
            return {...state, isLoading: false, isUploadSuccess: false}
        case UPLOAD_POST_SUCCESS: 
            return {...state,...INITIAL_STATE, isUploadSuccess: true}
        default:
            return state
    }
}