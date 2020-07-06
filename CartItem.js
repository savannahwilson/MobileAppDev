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
				style={{ marginLeft: 10, marginRight: 10, alignItems: 'center', padding: 4}}
			/>

                <View style = {{marginBottom: 5}}>
                <Text style = {styles.name}>{props.name}</Text>
                </View>

           
			
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		marginTop: '2%',
		flexDirection: 'row',
		borderColor: '#ff850b',
		borderWidth: 3,
		width: '100%',
        height: 35,
        borderRadius: 25,
        alignSelf: 'center'
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