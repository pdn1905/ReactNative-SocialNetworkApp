import React, { Component } from 'react';
import { View, StatusBar, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Spinner from './SpinnerComponent';
import { Card, CardItem, Button,Left, Right } from 'native-base';
import { SELECTED_POST_IMAGE } from '../actions/typeActions';
import { selectedImage, postCaptionChanged, uploadPosts } from '../actions/index';

class CameraComponent extends Component {

    selectPhotoTapped() {
        this.props.selectedImage(SELECTED_POST_IMAGE)
    }

    onChangeCaption(caption) {
        this.props.postCaptionChanged(caption)
    }

    onUploadImage() {
        const { imageData, caption, navigation } = this.props;
        this.props.uploadPosts(imageData, caption,navigation);
    }

    componentDidUpdate() {
        if (this.props.isUploadSuccess) {
            
        }
    }

    renderLoader() {
        console.log('renderLoader')
        if (this.props.isLoading) {
            console.log('renderLoader00loading')
            return (<View style={{ position: 'absolute', top: 0, bottom:0, right: 0, left: 0, alignItems: 'center', justifyContent: 'center' }}><Spinner /></View>);
        } 
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
            {this.renderLoader()}
                <View>
                    <CardItem style={{ height: 100, flexDirection: 'row'}} >
                    <View>
                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <Image source={ this.props.imageData ? { uri: 'data:image/jpeg;base64,' + this.props.imageData.data } : require('../asset/place.png')  } style={{width: 100, height: 80}}  />
                    </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, height: 80}}>
                        <TextInput multiline={true} 
                        placeholder='Enter your description...'
                        value={this.props.caption}
                        onChangeText={this.onChangeCaption.bind(this)}
                        style={{ paddingTop: 5, paddingBottom: 0, paddingLeft: 10, flex: 1 }}>
                        </TextInput>
                    </View>
                    </CardItem>
                </View>
                <View style={{ 
                    bottom: 10,
                    right: 10,
                    left: 10,
                    height: 50,
                    position:'absolute',
                }}>
                    <Button block 
                        style={{ backgroundColor: 'rgba(32, 53, 70, 0.98)'}} 
                        onPress={this.onUploadImage.bind(this)}
                    ><Text style={{ color: 'white' }}> UPLOAD NOW! </Text>
                    </Button>
                </View>  
            </View>   
        )
    }
}

const mapStateToProps = (state) => {
    const { imageData, caption, isLoading, isUploadSuccess } = state.uploadPost;
    return { imageData, caption, isLoading, isUploadSuccess };
}

export default connect(mapStateToProps,{selectedImage, postCaptionChanged, uploadPosts})(CameraComponent);

const styles = {
    container: {
        flex: 1
    },
}