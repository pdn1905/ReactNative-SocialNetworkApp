import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import UploadPost from './UploadPostReducer';
import FetchPost from './FetchPostReducer';

export default combineReducers({
    login: LoginReducer,
    uploadPost: UploadPost,
    fetchPost: FetchPost
})