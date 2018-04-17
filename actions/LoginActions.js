import React, {Component } from 'react';
import { Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'firebase';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         SELECTED_PROFILE_IMAGE,
         USER_LOGGIN,
         USER_LOGGIN_SUCCESS, 
         USER_LOGGIN_FAILED,
         USERNAME_CHANGED,
         LOGGIN_PROCESSING
   } from './typeActions';


const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob


export const emailChanged = (email) => ({
        type: EMAIL_CHANGED,
        payload: email
});

export const passwordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    payload: password
});

export const usernameChanged = (username) => ({
    type: USERNAME_CHANGED,
    payload: username
})

export const logginProcessing = (dispatch) => {
    dispatch({ type: LOGGIN_PROCESSING })
}

export const userRegister = (username, email, password, imageData) => {
  console.log('is loading', {username, email, password, imageData});
  return (dispatch) => {
        logginProcessing(dispatch);
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => uploadImage(username, email,imageData,dispatch))
        .catch((error) => loginUserFailed(dispatch, error))
  }
}

export const userLoggin = (email, password) => {
  return (dispatch) => {
    logginProcessing(dispatch);
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user => dispatch({ type: USER_LOGGIN_SUCCESS }))
    .catch(error => loginUserFailed(dispatch,error))
  }
}

const loginUserFailed = (dispatch, error) => {
  dispatch({
    type: USER_LOGGIN_FAILED,
    payload: error
  })
}
const uploadImage = (username, email, imageData, dispatch) => {
    const { currentUser } = firebase.auth();
    const mime = 'application/octet-stream'
    const uri = imageData.uri
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    let uploadBlob = null

    const urlRef = firebase.storage().refFromURL('gs://myapp-9e33c.appspot.com')
    const imageRef =urlRef.child(`images/profile/${currentUser.uid}/${urlRef.key}`)

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
          console.log('URL', url)
          firebase.database().ref(`/users/${currentUser.uid}`)
          .push({ username: username, email: email, profileUrl: url })
          .then( () => { dispatch({ type: USER_LOGGIN_SUCCESS })})
          .catch((error) => loginUserFailed(dispatch,error))
      })
      .catch((error) => loginUserFailed(dispatch,error))
}