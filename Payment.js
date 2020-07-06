import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

import {favoriteCount} from './OrderScreen'
import { TextInput } from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';

export default function Payment(props) {
    const [name, changeName] = React.useState('');
    const [credit, changeCredit] = React.useState('');
    const [exp, changeExp] = React.useState('');
    const [cvv, changeCVV] = React.useState('');
    const [notes, changeNotes] = React.useState('');

    function getAlert() {
        if (name == '') {
            Alert.alert('Enter your name!')
        } else if (credit == '' | exp == '' | cvv == '') {
            Alert.alert('Enter all of your your credit card information!')
        } else {
            Alert.alert("Thanks for your order " + name)
            return (
                props.navigation.navigate('Home')
            )
        } 

        
    }

 return (
     <View style = {styles.container}>


    <View style = {styles.total}>
    <Text style= {{ fontSize: 30}}>TOTAL: ${favoriteCount*5}</Text>
    </View>

    <View style = {{width: '100%', margin: 20}}>

    <LinearGradient colors={['#ffd198', '#ffef9c', '#ffd198']}>

    <View style = {styles.paymentContainer}>

    <TextInput
    style={{ height: 40, borderColor: 'white', borderWidth: 3, borderRadius: 25, margin: 40, paddingLeft: 5}}
    onChangeText={text => changeName(text)}
    value={name}
    placeholder = 'Name on Card'
    >

    </TextInput>

    <TextInput
    style={{ height: 40, borderColor: 'white', borderWidth: 3, borderRadius: 25, margin: 40, paddingLeft: 5}}
    onChangeText={text => changeCredit(text)}
    value={credit}
    placeholder = 'Credit Card Number'
    >

    </TextInput>

    <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
    <TextInput
    style={{ height: 40, width: 100,borderColor: 'white', borderWidth: 3, borderRadius: 25, margin: 40, paddingLeft: 5}}
    onChangeText={text => changeExp(text)}
    value={exp}
    placeholder = 'EXP'
    >

    </TextInput>


    <TextInput
    style={{ height: 40, width: 100,borderColor: 'white', borderWidth: 3, borderRadius: 25, margin: 40, paddingLeft: 5}}
    onChangeText={text => changeCVV(text)}
    value={cvv}
    placeholder = 'CVV'
    >

    </TextInput>


    </View>

    <TextInput
    style={{ height: 80, width: '77%',borderColor: 'white', borderWidth: 3, borderRadius: 25, margin: 40, paddingLeft: 5}}
    onChangeText={text => changeNotes(text)}
    value={notes}
    placeholder = 'Notes'
    >

    </TextInput>

    </View>
           
    </LinearGradient>

    </View>

    <TouchableOpacity
    onPress = {() => getAlert()}
    >
    <View style = {styles.total}>
    <Text style= {{ fontSize: 30}}>Place Order!</Text>
    </View>
    </TouchableOpacity>

    </View>
 )
	
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffd198',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        //padding: 8
      },

      total: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        borderRadius: 25,
    },

    paymentContainer: {
        //flex: 8,
        borderColor: 'grey',
        borderWidth: 1,
        margin: '5%',
        borderRadius: 25,
    }
	
});