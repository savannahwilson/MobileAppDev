import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';
import Item from './Item'
import CartItem from './CartItem'
import { useLinkProps } from '@react-navigation/native';
import Checkout from './Checkout'
import { LinearGradient } from 'expo-linear-gradient';

var items = [
    {name: "The Liz", ingredients: "Canadian Bacon, Egg, Havarti on Ciabatta Roll", key: 1, favorited: false, pic: 'liz.png'}, 
    {name: "B.E.C", ingredients: "Bacon, Egg, Cheddar on Brioche Bun", key: 2, favorited: false, pic: 'bec.png'},
    {name: "A.M. Taco", ingredients: "Bacon, Diced Ham, Egg, Mexican Blend in Taco", key: 3, favorited: false},
    {name: "Pancakes", ingredients: "Add Chocolate Chips or Banana", key: 4, favorited: false},
    {name: "Mr. Spice", ingredients: "Sausage, Pepper Jack, Spicy Mayo on English Muffin", key: 5, favorited: false}

]
export {items}

var favoriteCount = 0
export {favoriteCount}

export default function Order(props) {

  const [favorites, setFavorites] = useState([]);
  const [others, setOthers] = useState([])

  let toggleFavorite = id => {
    setOthers(
    items.map(item => {
      if (item.key === id) {
        item.favorited = !item.favorited
        if (item.favorited == true) {
          favoriteCount = favoriteCount + 1
        } if (item.favorited == false) {
          favoriteCount = favoriteCount - 1
        }
      } else {
        return item
      }
    })
    )
    
    setFavorites(
      items.map(item => {
        if (item.key === id && item.favorited === false) return item
      })
    )
  }

  console.log(favoriteCount)
  if (favoriteCount == 0) {

    return (

      
      <View style={styles.container}>
    
    <View style = {styles.others}>


    <View style = {styles.topFavs}>
    
      <Text style = {styles.cart_title}>Add to Cart</Text>


      <Icon
      onPress = {() => Alert.alert("Press the plus sign next to an item to add to cart")}
      name = 'plus-circle'
      color = 'black'
      size = {18}
    
      >

      </Icon>
      </View>

      <Text style = {{
       color: 'grey', alignSelf: 'center', paddingTop: 20,
      fontSize: 18, fontWeight: 'bold'}}>ALL SANDWICHES ARE $5!</Text>
    

      <ScrollView style={{ width: '100%'}}>
      {
        items.map(item => {

            return (
            <Item
              name={item.name}
              ingredients = {item.ingredients}
              key={item.key}
              favorited={item.favorited}
              setFavorited={() => toggleFavorite(item.key)}
          />
            )
          
          
        })

      }
    </ScrollView>


    </View>

    <View style = {styles.favorites}>

      <View style = {styles.topFavs}>
      
      <Text style = {styles.fav_title}>Cart
      </Text>

      <Icon style = {{}}
      onPress = {() => props.navigation.navigate('Checkout')}
      name = 'shopping-cart'
      size = {20}
      color = 'orange'

      >
      </Icon> 


      </View>


      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 17, color: 'black', fontWeight: 'bold'}}>Add Something!</Text>
      <Text style = {{fontSize: 15, color: 'black'}}>Press the shopping cart when you're ready to checkout</Text>
      </View>
  
    </View>

  </View>
    )

  } else {
    return (

      
      <View style={styles.container}>
    
    <View style = {styles.others}>


    <View style = {styles.topFavs}>
    
      <Text style = {styles.cart_title}>Add to Cart</Text>


      <Icon
      name = 'plus-circle'
      color = 'black'
      size = {18}
    
      >

      </Icon>
      </View>

      <Text style = {{
       color: 'grey', alignSelf: 'center', paddingTop: 20,
      fontSize: 18, fontWeight: 'bold'}}>ALL SANDWICHES ARE $5!</Text>
    

      <ScrollView style={{ width: '100%'}}>
      {
        items.map(item => {

            return (
            <Item
              name={item.name}
              ingredients = {item.ingredients}
              key={item.key}
              favorited={item.favorited}
              setFavorited={() => toggleFavorite(item.key)}
          />
            )
          
          
        })

      }
    </ScrollView>


    </View>

    <View style = {styles.favorites}>

      <View style = {styles.topFavs}>
      
      <Text style = {styles.fav_title}>Cart
      </Text>

      <Icon style = {{}}
      onPress = {() => props.navigation.navigate('Checkout')}
      name = 'shopping-cart'
      size = {22}
      color = 'black'

      >
      </Icon> 


      </View>


      <ScrollView style={{ width: '100%'}}>
      {
        items.map(item => {
          if (item.favorited == true) {

            return (
            <CartItem
              name={item.name}
              ingredients = {item.ingredients}
              key={item.key}
              favorited={item.favorited}
              setFavorited={() => toggleFavorite(item.key)}
          />
            )
            }
          
        })

      }
    </ScrollView>
  
    </View>

  </View>
    )
  }

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff3a3',
    backgroundColor: '#fffdbb',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 8,
  },

  favorites: {
    flex: 2,
  },

  others: {
    flex: 6,
  },

  cart_title: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 5,
  },

  fav_title : {
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 5,
  },

  topFavs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ff850b',
    borderWidth: 4,
    borderRadius: 25,
    padding: 7,
    backgroundColor: '#ff850b'
  },
});