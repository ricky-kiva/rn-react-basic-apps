import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const twoText = () => {
    const iVento = 'Rickyslash'

    return (
        <View>
            <Text style={styles.text1}>Getting started with React Native</Text>
            <Text style={styles.text2}>My name is {iVento}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        fontSize: 45,
    },
    text2: {
        fontSize: 20,
    }
})

export default twoText;