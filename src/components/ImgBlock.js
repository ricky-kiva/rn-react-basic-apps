import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImgStacker = ({ place, thePict, score }) => {
    return (
        <View>
            <Image source={thePict} />
            <Text>{place}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    )
};

const styler = StyleSheet.create({});

export default ImgStacker;