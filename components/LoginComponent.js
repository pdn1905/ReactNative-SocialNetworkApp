import React, { Component } from 'react';
import {
    View, StyleSheet, Text, KeyboardAvoidingView, SafeAreaView, Keyboard,
    Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, StatusBar,
    ScrollView
} from 'react-native';
import { Thumbnail } from 'native-base';
import { createRootNavigator } from '../router/router';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, selectedImage } from '../actions/index';

class LoginComponent extends Component {

    state = { isLogged: null }

    onChangeEmail(email) {
        this.props.emailChanged(email);
    }

    onChangePassword(password) {
        this.props.passwordChanged(password);
    }

    selectPhotoTapped() {
        this.props.selectedImage()
      }

    render() {
        return(
            <SafeAreaView style={styles.container}>
             <StatusBar barStyle='light-content' />
             <KeyboardAvoidingView behavior='padding' style={styles.container}>
             <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
             <View style={styles.container}>
                 <View style={styles.logoContainer}>
                   <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../asset/logo.png')} />
                    <Text style={styles.title}>ACCOUNT INFORMATION</Text>
                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <Image style={{ height: 70, width: 70, marginTop: 10, borderRadius: 35 }} source={ this.props.imageData ? { uri: 'data:image/jpeg;base64,' + this.props.imageData.data } : require('../asset/me.jpg') } />
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.inforContainer}>
                    <TextInput placeholder='Enter your email or username...' 
                               style={styles.input} 
                               placeholderTextColor='rgba(255,255,255,0.6)'
                               autoCorrect={false}
                               keyboardType='email-address'
                               returnKeyType='next'
                               value={this.props.email}
                               onChangeText={this.onChangeEmail.bind(this)}
                               onSubmitEditing={() => this.refs.txtPassword.focus() }
                                />
                   <TextInput placeholder='Enter your password..' 
                               style={styles.input} 
                               placeholderTextColor='rgba(255,255,255,0.6)'
                               autoCorrect={false}
                               secureTextEntry
                               returnKeyType='go'
                               onChangeText={this.onChangePassword.bind(this)}
                               value={this.props.password}
                               ref={'txtPassword'}
                                />
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate('SignedIn');
                    }}>
                        <Text style={{ color: 'rgb(32, 53, 70)', fontWeight: 'bold' }}>SIGN IN</Text>>
                    </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </SafeAreaView>   
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        paddingTop: 30
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
        color: '#f7c744',
        fontWeight: 'bold'
    },
    inforContainer: {
        left: 0,
        right: 0,
        padding: 20
    },
    input: {
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    button: {
        height: 45,
        backgroundColor: '#f7c744',
        paddingHorizontal: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})

const mapStateToProps = (state) => {
    const { email, password, imageData } = state.login;
    return { email, password, imageData };
}
export default connect(mapStateToProps,{emailChanged,passwordChanged, selectedImage})(LoginComponent);