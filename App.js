import React from 'react';
import { StyleSheet, Text, View, Animation } from 'react-native';
import HomeScreen from './Components/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity} from 'react-native-gesture-handler'
import OrderScreen from './Components/OrderScreen'
import Checkout from './Components/Checkout'
import Payment from './Components/Payment'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

//const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
        <NavigationContainer>
          <RootStack.Navigator initialRouteName = "Home">
            <RootStack.Screen name = "Home" component = {HomeScreen}/>
            <RootStack.Screen name = "Order" component = {OrderScreen}/>
            <RootStack.Screen name = "Checkout" component = {Checkout}/>
            <RootStack.Screen name = "Payment" component = {Payment}/>
          </RootStack.Navigator>
        </NavigationContainer>
    );
}
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
