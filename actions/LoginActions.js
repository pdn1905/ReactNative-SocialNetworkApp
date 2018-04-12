import React, {Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { EMAIL_CHANGED, PASSWORD_CHANGED, SELECTED_IMAGE } from './typeActions';


export const emailChanged = (email) => ({
        type: EMAIL_CHANGED,
        payload: email
});

export const passwordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    payload: password
});


export const selectedImage = () => {
    const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
    };
    return (dispatch) => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
              console.log('User cancelled photo picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              // let source = { uri: response.uri };
              // You can also display the image using data:
            //   let source = { uri: 'data:image/jpeg;base64,' + response.data };
            //   this.setState({
            //     uri: response.uri,
            //     avatarSource: source
            //   });
            dispatch({ type: SELECTED_IMAGE, payload: response })
            }
          });
    }
}
