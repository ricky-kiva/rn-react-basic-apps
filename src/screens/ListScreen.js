import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

const theLists = () => {
    const sharks = [
        {shark: 'Great White'},
        {shark: 'Blue'},
        {shark: 'Lemon'},
        {shark: 'Port Jackson'},
        {shark: 'Mako'},
        {shark: 'Whale'},
    ]

    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={sharks}
            keyExtractor={(keyz) => keyz.shark}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textSharks}>{item.shark}</Text> 
                )
            }}>
        </FlatList>
    )
}

const styles = StyleSheet.create({
    textSharks: {
        marginVertical: 10,
        marginHorizontal: 10,
    }
})

export default theLists