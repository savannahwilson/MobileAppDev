import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CheckoutItem from './CheckoutItem'
import {items} from './OrderScreen'
import {favoriteCount} from './OrderScreen'

export default function Checkout(props) {

    if (favoriteCount == 0) {
        return (
            <View style = {styles.container}>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'grey'}}>Your cart is empty...</Text>
            <Icon
            name = 'frown'
            size = {50}
            color = 'orange'
            >

            </Icon>
            
            </View>
        )
    }

 return (
     <View style = {styles.container}>

<View style = {styles.favorites}>
      
    <View style = {styles.topFavs}>

    <Text style = {styles.title}>Your Items - ${favoriteCount * 5}</Text>
    </View>
    

    <ScrollView style = {{width: '100%'}}>
    {items.map(item => {
        if (item.favorited == true) {
            return (
            <CheckoutItem
              name={item.name}
              ingredients = {item.ingredients}
              key={item.key}
              favorited={item.favorited}
              setFavorited={() => toggleFavorite(item.key)}
          />
            )
        }
    })}
    </ScrollView>

    </View>

    <TouchableOpacity 
    onPress = {() => props.navigation.navigate('Payment')}
    style = {styles.payment}>
        <Text style = {styles.title}>Continue to payment</Text>
    </TouchableOpacity>

    </View>
 )
	
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#ffca3a',
        backgroundColor: '#fffdbb',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 8,
      },

	topFavs: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#ff850b',
        borderWidth: 4,
        borderRadius: 25,
        padding: 7,
        backgroundColor: '#ff850b',
        width: '100%'
      },

      title: {
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
      },

      total: {
          borderColor: 'black',
          borderWidth: 2,
          padding: 10,
          borderRadius: 25,
      },

      payment: {
          //width: '100%',
          borderColor: 'orange',
          borderRadius: 25,
          borderWidth: 5,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
      },

      favorites: {
        flex: 3,
        width: '100%',
      }
	
});