import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TheCounter = () => {
    const [counting, setCounting] = useState(0);

    return (
        <View>
            <Button title="Add" onPress={() => {setCounting(counting + 1)}} />
            <Button title="Sub" onPress={() => {setCounting(counting - 1)}} />
            <Text>Counter: {counting}</Text>
        </View>
    )
}

const styler = StyleSheet.create({})

export default TheCounter;
