import React from 'react';
import 'react-native-gesture-handler';

import {Button, View, Text, Image, AsyncStorage, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import TopStatusBar from './src/components/TopStatusBar'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import ScanScreen from "./src/screens/ScanScreen";
import EmployeePortalScreen from "./src/screens/EmployeePortalScreen";
import LoginScreen from "./src/screens/LoginScreen";

Ionicons.loadFont();


class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./ETS_logo.png')}
                style={{width: 97, height: 35}}
            />
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
                tabBarVisible: false
            }
        },
        TopStatusBar: TopStatusBar,
        Messages: MessagesScreen,
        Scan: ScanScreen,
        Pay: EmployeePortalScreen,
        Settings: SettingsScreen,
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false,
                tabBarVisible: false
            }
        }
    }
);
//hides tab navigator on login screen
let loggedIn = false
AppNavigator.navigationOptions = ({navigation})=>{
    let { routeName } = navigation.state.routes[navigation.state.index];
    let navigationOptions = {};

    if (routeName === 'Login') {
        navigationOptions.tabBarVisible = false;
        <TopStatusBar hidden/>
    } else{
        loggedIn = true
    }
    return navigationOptions;
}


const TopTabNavigator = createMaterialTopTabNavigator(
    {
        Home: AppNavigator,
        Messages: MessagesScreen,
        // Scan: ScanScreen,
        Pay: EmployeePortalScreen,
        Settings: SettingsScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `md-list${!focused ? '' : '-box'}`;
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Settings') {
                    iconName = 'ios-settings';
                } else if (routeName === 'Messages') {
                    iconName = 'ios-chatboxes';
                } else if (routeName === 'Scan') {
                    iconName = 'md-qr-scanner';
                } else if (routeName === 'Pay') {
                    iconName = 'md-paper-plane';
                }

                return <IconComponent name={iconName} size={20} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            showIcon: true,
            style:{
                backgroundColor: '#04a858',
                fontSize: 8
            }
        },
    },
);

const AppContainer = createAppContainer(createSwitchNavigator({
    App: TopTabNavigator
}));

export default () => {
        return (
            <View style={{flex:1}} >
                <TopStatusBar/>
                <AppContainer style={styles.topTabNav}/>
            </View>
        )

}

const styles = StyleSheet.create({

})
