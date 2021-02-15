import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Input = ({placeholder, ...rest}) => {
    return (
        <View>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#A55EEA' {...rest}/>
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#A55EEA',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 18,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 14,
        color: '#A55EEA',
        marginBottom: 20
    }
})

export default Input
