import React, { Component } from 'react';
import {
    View, StyleSheet, Text, KeyboardAvoidingView, SafeAreaView, Keyboard,
    Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, StatusBar,
    ScrollView, Alert
} from 'react-native';
import { Thumbnail } from 'native-base';
import { createRootNavigator } from '../router/router';
import Spinner from './SpinnerComponent';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { SELECTED_PROFILE_IMAGE } from '../actions/typeActions';
import { usernameChanged ,emailChanged, passwordChanged, selectedImage, userRegister, userLoggin } from '../actions/index';


class LoginComponent extends Component {

    state = { isLogged: null, isLoggin: true }

    onChangeUsername(username) {
        this.props.usernameChanged(username);
    }

    onChangeEmail(email) {
        this.props.emailChanged(email);
    }

    onChangePassword(password) {
        this.props.passwordChanged(password);
    }

    selectPhotoTapped() {
        this.props.selectedImage(SELECTED_PROFILE_IMAGE);
      }

    onUserSignUp() {
        const { username, email, password, imageData} = this.props;
        this.props.userRegister(username, email,password,imageData);
    }

    onUserLogin() {
        const { email, password } = this.props;
        this.props.userLoggin(email, password);
    }

    renderLoader() {
        if (this.props.isLoading) {
            return (<View style={{ position: 'absolute', top: 0, bottom:0, right: 0, left: 0, alignItems: 'center', justifyContent: 'center' }}><Spinner /></View>);
        } 
        return null;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate,',this.props.isLogginSuccess);
        if (this.props.isLogginSuccess === true) {
            console.log('.navigation.navigate');
            this.props.navigation.navigate("SignedIn");
        } else if (this.props.loginError) {
            const { loginError } = this.props;
            Alert.alert('SignUp Error. Please try again!!!',loginError.message,
            [
                {text: 'Dimiss', onPress: () => { }, style: 'cancel'}   
            ],
            { cancelable: false }
        )
        }
    }

    onDirectRegister() {
        this.setState({
            isLoggin: false
        });
    }
    onDirectLoggin() {
        this.setState({
            isLoggin: true
        });
    }

    renderLogginView() {
        return (
            <View style={styles.container}>  
                {this.renderLoader()}    
               <View style={styles.logoContainer}>
                   <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../asset/logo.png')} />
                    <Text style={styles.title}>ACCOUNT INFORMATION</Text>
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
                               ref={'txtEmail'}
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
                    <TouchableOpacity style={styles.button} onPress={this.onUserLogin.bind(this)}>
                        <Text style={{ color: 'rgb(32, 53, 70)', fontWeight: 'bold' }}>LOGGIN</Text>>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.anotherButton} onPress={this.onDirectRegister.bind(this)}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>REGISTER</Text>>
                    </TouchableOpacity>
                </View>
               </View>)
    }

    renderRegisterView() {
        return (
     <View style={styles.container}>  
      {this.renderLoader()}    
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
            <TextInput placeholder='Enter your name...' 
                        style={styles.input} 
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        autoCorrect={false}
                        keyboardType='default'
                        returnKeyType='next'
                        value={this.props.username}
                        onChangeText={this.onChangeUsername.bind(this)}
                        onSubmitEditing={() => this.refs.txtEmail.focus() }
                         />
             <TextInput placeholder='Enter your email or username...' 
                        style={styles.input} 
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType='next'
                        value={this.props.email}
                        secureTextEntry={false}
                        onChangeText={this.onChangeEmail.bind(this)}
                        onSubmitEditing={() => this.refs.txtPassword.focus() }
                        ref={'txtEmail'}
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
             <TouchableOpacity style={styles.button} onPress={this.onUserSignUp.bind(this)}>
                 <Text style={{ color: 'rgb(32, 53, 70)', fontWeight: 'bold' }}>REGISTER</Text>>
             </TouchableOpacity>
             <TouchableOpacity style={styles.anotherButton} onPress={this.onDirectLoggin.bind(this)}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGGIN</Text>>
                    </TouchableOpacity>
         </View>
        </View>)
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
             <StatusBar barStyle='light-content' />
             <KeyboardAvoidingView behavior='padding' style={styles.container}>
             <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
             <View style={styles.container}>
              {(this.state.isLoggin) ? this.renderLogginView() : this.renderRegisterView()};
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
    },
    anotherButton: {
        height: 45,
        // backgroundColor: '#f7c744',
        paddingHorizontal: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})

const mapStateToProps = (state) => {
    const { username, email, password, imageData, isLogginSuccess, loginError, isLoading } = state.login;
    return { username, email, password, imageData, isLogginSuccess, loginError, isLoading };
}
export default connect(mapStateToProps,{ usernameChanged, emailChanged, passwordChanged, selectedImage, userRegister, userLoggin})(LoginComponent);