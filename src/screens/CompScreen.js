import React from 'react' //'react' rotates about the connection between each component
import { Text, View, StyleSheet } from 'react-native' //'react-native' is about the component itself

const CompScreen = () => {
    const tanggal = <Text style={merch.subText}>[15/05/22]</Text>
    return(
    <View>
        <Text style={merch.subText}>This is a subtext Ricky has created.</Text>
        {tanggal}
    </View>
)}

const merch = StyleSheet.create({
    subText: {
        fontSize: 12,
        fontWeight: '100',
        color: 'black',
        textAlign: 'center',
    }
})

export default CompScreen;