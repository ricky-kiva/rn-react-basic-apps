import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImgBlock from '../components/ImgBlock';

const ImgList = () => {
    return (
        <View>
            <ImgBlock 
                place="Atlantic"
                thePict={require('../../assets/places/beach.jpg')}
                score="9"
            />
            <ImgBlock 
                place="Amazon"
                thePict={require('../../assets/places/forest.jpg')}
                score="7"
            />
            <ImgBlock 
                place="Asgard"
                thePict={require('../../assets/places/mountain.jpg')}
                score="4"
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImgList;