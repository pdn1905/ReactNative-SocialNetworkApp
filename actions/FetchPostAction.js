import firebase from 'firebase';
import { FETCH_POST_FAILED, FETCH_POST_SUCCESS, START_FETCH_POST } from './typeActions';

export const fetchPosts = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/posts/${currentUser.uid}`)
        .on('value', snapshot => {
            const posts = []
            snapshot.forEach((child) => {
                var post = child.val();
                post['id'] = child.key;
                posts.push(post);
            })
            console.log(posts, 'SNAPSHOOOOOOT')
            fetchPostsSuccess(dispatch,posts);
        })
    };
  };

const fetchPostsSuccess = (dispatch,posts) => {
    dispatch({
        type: FETCH_POST_SUCCESS,
        payload: posts
    })
 }

 const fetchPostFailed = (dispatch,error) => {
    dispatch({
        type: FETCH_POST_SUCCESS,
        payload: error
    })
 }
