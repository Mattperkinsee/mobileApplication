import React from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {IsLoggedIn} from "../components/IsLoggedIn"

const TopStatusBar = (props) => {
    return (
        <View>
            <StatusBar
                backgroundColor='green'
                barStyle='light-content'
            />
            <View style={styles.header}>
                <Ionicons name='ios-camera' size={28} color='white'/>
                <Ionicons name='ios-settings' size={28} color='white' onPress={() => {
                    console.log(props)
                }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#04a858',
        paddingHorizontal: 18,
        paddingTop: 10,
    },
    topTabNav:{
        backgroundColor: '#04a858',
    }
})

export default TopStatusBar
