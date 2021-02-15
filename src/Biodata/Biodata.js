import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet, TouchableHighlight } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../component/Button'
import Input from '../component/Input'

const Biodata = () => {

    const globalStateBuah = useSelector((state) => state.reducerBuah)
    const dispatch = useDispatch()

    const sendData = () => {
         console.log("data + " + JSON.stringify(globalStateBuah.form));
    }

    const onInputChange = (value, inputType) => {
        dispatch({type: "SET_FORM", inputType: inputType, inputValue: value})
    }
    return (
        <View>
            <Text style={styles.text}>Buah</Text>

       <Input placeholder="masukan warna" value={globalStateBuah.form.warna} onChangeText={(value) => onInputChange(value, 'warna')}/>
       <Input placeholder="Masukkan kondisi" value={globalStateBuah.form.kondisi} onChangeText={(value) => onInputChange(value, 'kondisi')}/> 
       <Input placeholder="Masukkan harga" value={globalStateBuah.form.harga} onChangeText={(value) => onInputChange(value, 'harga')}/>
       <Button title="Daftar" onPress={() => sendData()}/>
</View>

    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#A55EEA',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontSize: 14,
        color: '#A55EEA'
    },
    text:{
        paddingTop: 50,
        textAlign: 'center',
        paddingBottom: 20
        
    }
})


export default Biodata
