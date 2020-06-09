import React, {useState} from "react"
import {
    Text,
    StyleSheet,
    Keyboard,
    SafeAreaView,
    ScrollView,
    TouchableWithoutFeedback,
    View,
    Alert,
    Platform,
    TextInput,
    Image,
    KeyboardAvoidingView,
    Linking
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {Button, Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import {isLoggedIn} from "../api/authentication";

let loggedIn = false

const LoginScreen = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    isLoggedIn(props)


    const SetAccessToken = async (token) => {
        await AsyncStorage.setItem('token', token)
    }
    //user already has a token and redirects to home

    // if(getAccessToken()){
    //     // props.navigation.navigate('Home')
    //     console.log('user already has token...redirecting..')
    // }
    const removeToken = () => {
        AsyncStorage.removeItem('token')
    }
    const handleLogin = async (username, password) => {
    }
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{flex: 1}}
        >
            <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
                    <View style={styles.inner}>
                        <Image style={{alignSelf: 'center', marginBottom: 10}} source={require('../assets/images/logowhite.png')}/>
                        <View style={styles.content}>
                        <View style={styles.circleLockBG}>
                            <Icon style={styles.circleLock} name={'lock'}/>
                        </View>
                        <Text style={{fontSize: 24, textAlign: 'center', color: '#FFF'}}>Sign In</Text>
                        <Input
                            leftIcon={{type: 'font-awesome', name: 'user', color: 'white'}}
                            inputStyle = {{color:'white'}}
                            placeholderTextColor = 'darkgray'
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            placeholder={"Username"}
                            value={username}
                            onChangeText={username => setUsername(username)}
                        />
                        <Input
                            secureTextEntry
                            inputStyle = {{color:'white'}}
                            leftIcon={{type: 'font-awesome', name: 'lock', color: '#FFF'}}
                            placeholderTextColor = 'darkgray'
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            placeholder={"Password"}
                            value={password}
                            onChangeText={password => setPassword(password)}
                        />


                        <Button
                            keyboardShouldPersistTaps={'handled'}
                            raised
                            containerStyle={{margin: 10}}
                            title="SIGN IN"
                            onPress={() => handleLogin(username, password)}
                        />
                        {/*<Button*/}
                        {/*    raised*/}
                        {/*    containerStyle={{margin: 10}}*/}

                        {/*    title="Remove Token"*/}
                        {/*    onPress={() => removeToken()}*/}
                        {/*/>*/}
                        <View style={{alignSelf:'center'}}>
                        <Text style={{alignSelf: 'flex-start', alignContent: 'center',  marginTop: 30, textAlign: 'center', color: 'blue'}}
                              onPress={() => console.log('test')}>
                            New User / Forgot Password?
                        </Text>
                        </View>
                        <Text style={{marginTop: 20, textAlign: 'center', color: '#FFF'}}>Copyright © EPES Transport System LLC
                            2020.</Text>
                        </View>
                        <View style={{ flex : 1 }} />
                    </View>
            </KeyboardAwareScrollView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    button: {
        margin: 20,
        padding: 80
    },
    container: {
        flex: 1,
        backgroundColor: '#04a858',
    },
    content: {
        backgroundColor: "#04a858"
    },
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#04a858',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10
    },
    inputStyle: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18
    },
    circleLock: {
        alignSelf: 'center',
        fontSize: 24,
        color: '#04a858'
    },
    circleLockBG: {
        width: 50,
        height: 50,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    inner: {
        padding: 24,
        flex: 1,
    }
});

export default LoginScreen
