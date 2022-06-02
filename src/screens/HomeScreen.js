import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Vento</Text>
      <Button 
        title="Component Screen"
        onPress={() => navigation.navigate("Comp")}
      />
      <Button 
        title="List Screen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Image Block"
        onPress={() => navigation.navigate("ImgStk")}
      />
      <Button
        title="Counter"
        onPress={() => navigation.navigate("CountZ")}
      />
      <Button
        title="Colors"
        onPress={() => navigation.navigate("ClButt")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 12,
    textTransform: 'uppercase'
  },
});

export default HomeScreen;
