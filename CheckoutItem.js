import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

export default function Item(props) {

    const [notes, changeNotes] = React.useState('')

	return (
		<View style={styles.listContainer}>
			<Icon 
                size={20}
                onPress={props.setFavorited}
                color={props.favorited ? 'orange' : 'black'}
				style={{ marginLeft: 10, marginRight: 10}}
			/>

            <View>

                <Text style = {styles.name}>{props.name}</Text>

                <Text style = {styles.ingredients}>{props.ingredients}</Text>

            </View>

            <TextInput
                style={{borderColor: 'black', borderWidth: 1, borderRadius: 10, width: '90%', height: 50, paddingLeft: 5, backgroundColor: '#f0f0f0'}}
                onChangeText={text => changeNotes(text)}
                value={notes}
                placeholder = 'Additional notes'
                >
                

                </TextInput>

           
			
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		marginTop: '5%',
		//flexDirection: 'row',
		borderColor: '#ff850b',
		borderWidth: 3,
		width: '100%',
        height: 126,
        borderRadius: 25,
        paddingLeft: 8,
    },

    name: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
    },

    ingredients: {
        color:'grey',
        fontStyle: 'italic',
        fontSize: 13,
        paddingBottom: 4
        
    }, 
});