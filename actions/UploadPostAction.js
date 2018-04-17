import { POST_CAPTION_CHANGED, UPLOAD_POST_FAILED, UPLOAD_POST_SUCCESS, START_UPLOAD_POST, START_FETCH_POST } from './typeActions';
import { Platform } from 'react-native';
import UUIDGenerator from 'react-native-uuid-generator';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'firebase';
export const postCaptionChanged = (caption) => ({
    type: POST_CAPTION_CHANGED,
    payload: caption
});

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export const uploadPosts = (imageData,caption,navigation) => { 
    return (dispatch) => {
        dispatch({ type: START_UPLOAD_POST });
        uploadPostsToDatabase(imageData,caption,navigation ,dispatch);
    }
}

export const uploadPostsToDatabase = (imageData,caption,navigation ,dispatch) => {
    const { currentUser } = firebase.auth();
    const mime = 'application/octet-stream'
    const uri = imageData.uri
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    let uploadBlob = null

    const unixTime = Math.floor(Date.now() /1000);
    const urlRef = firebase.storage().refFromURL('gs://myapp-9e33c.appspot.com')
    var uniqueKey = unixTime
    const imageRef =urlRef.child(`images/posts/${currentUser.uid}/${uniqueKey}`)

    

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
          firebase.database().ref(`/posts/${currentUser.uid}`)
          .push({ caption, url, date: unixTime, uid: currentUser.uid  })
          .then( () => { 
            dispatch({ type: UPLOAD_POST_SUCCESS})
            dispatch({ type: START_FETCH_POST})
            navigation.navigate('Home');
            })
          .catch((error) => dispatch({ type: UPLOAD_POST_FAILED,payload: error }))
      })
      .catch((error) => dispatch({ type: UPLOAD_POST_FAILED,payload: error }))
}


  