import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Item(props) {
	return (
		<View style={styles.listContainer}>
			<Icon 
                name={props.favorited ? 'trash-2' : 'plus-circle'}
                size={20}
                onPress={props.setFavorited}
                color={props.favorited ? 'orange' : 'black'}
				style={{ marginLeft: 10, marginRight: 10, alignSelf: 'center'}}
			/>

            <View style = {styles.info}>

                <Text style = {styles.name}>{props.name}</Text>


                <Text style = {styles.ingredients}>{props.ingredients}</Text>
            </View>

		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		marginTop: '5%',
		flexDirection: 'row',
		borderColor: '#ff850b',
		borderWidth: 3,
		width: '100%',
        height: 70,
        borderRadius: 25,
        alignItems: 'center',
    },
    
    info: {
        //flexDirection: 'row',
    
    },

    name: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
    },

    ingredients: {
        color:'grey',
        fontStyle: 'italic',
        fontSize: 13
        
    }, 
});