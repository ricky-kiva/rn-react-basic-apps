import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ColorButt = () => {
    const [color, setColor] = useState([])
    console.log(color)
    return (
        <View>
            <Button title='Add Color!' 
                onPress={() => {
                    setColor([...color, custRGB()])
                }}
            />
            <View style={{ height: 100, width: 100, backgroundColor: custRGB() }}></View>
            <FlatList
                data={color}
                keyExtractor={( item ) => item }
                renderItem={({ item }) => {
                    return ( 
                        <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                    )
                }}
            >
            </FlatList>
        </View>
    )
}

const custRGB = () => {
    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${blue}, ${green})`;
}

const styler = StyleSheet.create({});

export default ColorButt