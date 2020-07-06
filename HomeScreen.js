import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler'


export default function HomeScreen(props) {
  const [buttonOpacity, setButtonOpacity] = useState(new Animated.Value(0))

  useEffect(()=>{
    console.log("using effect")
    Animated.timing(
      buttonOpacity, {
        toValue: 1,
        duration: 4000
      }
    ).start()
}, [])

  return (
    <View style={styles.container}>

        <ImageBackground source={require('../assets/logo.png')} style={styles.logo}>

        <Text style = {styles.title}>The Yolk Shack</Text>
        <Text style = {styles.motto}>Life is too short for bad breakfast</Text>

        <TouchableOpacity
          onPress = {() => props.navigation.navigate('Order')}
        >
        <Animated.View>
            <Animated.Text style = {{...styles.button, opacity: buttonOpacity}}>Order Now</Animated.Text>
        </Animated.View>
        </TouchableOpacity>
        </ImageBackground>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  button: {
    fontSize: 20,
    color: 'white',
    marginBottom: 80,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#FAD86D',
    padding: 10,
  },

  logo: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    bottom: 430,
  },

  motto: {
    fontStyle: 'italic',
    fontSize: 20,
    color: '#FAD86D',
    bottom: 430,
  }
});