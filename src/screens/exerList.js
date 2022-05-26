import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const friAge = () => {
    const namAge = [
        {name: '1', age: 20},
        {name: '2', age: 45},
        {name: '3', age: 32},
        {name: '4', age: 27},
        {name: '5', age: 53},
        {name: '7', age: 30},
    ]

    return (
        <FlatList
            data={namAge}
            keyExtractor={(keyz) => keyz.name}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textFriend}>Friend #{item.name} - Age {item.age}</Text>
                )
            }}
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    textFriend: {
        marginHorizontal: 15,
        marginVertical: 10,
    }
})

export default friAge